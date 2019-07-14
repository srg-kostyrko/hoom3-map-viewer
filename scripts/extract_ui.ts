import fs from "fs";
import jetpack from "fs-jetpack";
import path from "path";
import { createImageData, createCanvas } from "canvas";

import {
  uiProcessing,
  uiNameMap,
  uiGroups,
  UiPreparedData,
  uiProcessingPcx
} from "./ui";
import { defFile, pcxFile, DefFile, PcxFile } from "homm3-parsers";
import { parse, TagProducer } from "binary-markup";

const root = path.resolve(process.cwd(), "src/assets/homm3");

const fileTags: { [key: string]: TagProducer<unknown> } = {
  ".def": defFile,
  ".pcx": pcxFile
};

const readFile = (fileName: string): DefFile | PcxFile | undefined => {
  const content = jetpack.read(
    path.resolve(__dirname, "defs", fileName),
    "buffer"
  );
  if (!content) {
    console.error(`Failed to read ${fileName}`);
    return;
  }
  const tag = fileTags[path.extname(fileName)] as TagProducer<
    DefFile | PcxFile
  >;
  if (!tag) {
    console.error(`no file parser for ${path.extname(fileName)}`);
    return;
  }
  return parse(tag, content);
};

const save = (name: string, content: UiPreparedData) => {
  const { parts, width, height, css } = content;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  for (const position of parts) {
    const imageData = createImageData(
      position.imageData,
      position.width,
      position.height
    );
    ctx.putImageData(imageData, position.x, position.y);
  }
  const out = fs.createWriteStream(path.join(root, "ui", name));
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  if (css) {
    fs.writeFile(
      path.join(root, "ui", name.replace(".png", ".css")),
      css.join("\n\n"),
      "utf8",
      err => err && console.error(err)
    );
  }
};

for (const [fileName, processingFn] of Object.entries(uiProcessing)) {
  const name = uiNameMap[fileName];
  console.info(`Processing ${name}...`);
  const parsedContent = readFile(fileName) as DefFile;
  if (parsedContent) {
    const processed = processingFn(parsedContent, name);
    save(name, processed);
  }
}

for (const [fileName, processingFn] of Object.entries(uiProcessingPcx)) {
  const name = uiNameMap[fileName];
  console.info(`Processing ${name}...`);
  const parsedContent = readFile(fileName) as PcxFile;
  if (parsedContent) {
    const processed = processingFn(parsedContent, name);
    save(name, processed);
  }
}

for (const { files, processingFn, name } of uiGroups) {
  console.info(`Processing ${name}...`);
  const contents: PcxFile[] = [];
  for (const fileName of files) {
    const content = readFile(fileName);
    if (content) {
      contents.push(content as PcxFile);
    }
  }
  const processed = processingFn(contents);
  save(name, processed);
}
