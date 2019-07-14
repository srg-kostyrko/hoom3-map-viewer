import path from "path";
import fs from "fs";
import zlib from "zlib";
import glob from "glob";

import { textures } from "./textures";
import { uiFiles } from "./ui";
import { animationFiles } from "./animations";
import { townFiles } from "./towns";
import { lodFile, LodFile } from "homm3-parsers";
import { parse, TagProducer } from "binary-markup";

const allFiles = textures
  .concat(uiFiles)
  .concat(animationFiles)
  .concat(townFiles);

const dirPath = path.resolve(__dirname, "in");

interface LodFileEntry {
  name: string;
  size: number;
  csize: number;
  compressed: boolean;
  content: number[];
}

const saveFile = (file: LodFileEntry) => {
  const pathToSave = path.resolve(__dirname, "defs", file.name.toLowerCase());
  try {
    const stream = fs.createWriteStream(pathToSave);
    if (file.compressed) {
      const decompressed = zlib.inflateSync(new Uint8Array(file.content));
      stream.write(decompressed);
    } else {
      stream.write(Buffer.from(file.content));
    }
    stream.end();
  } catch (err) {
    console.error(file.name, file, err);
  }
};

function parseFile(filePath: string) {
  fs.readFile(
    filePath,
    (err, data): void => {
      if (err) {
        console.error(err);
        return;
      }
      const fileData = parse<LodFile>(
        (lodFile as unknown) as TagProducer<LodFile>,
        data
      );

      for (const file of fileData.entries) {
        if (allFiles.includes(file.name.toLowerCase())) {
          console.log(`Saving file ${file.name.toLowerCase()}`);
          saveFile(file);
        }
      }
    }
  );
}

glob(`${dirPath}/*.lod`, (error, files) => {
  if (error) {
    console.error(error);
  }
  for (const filePath of files) {
    parseFile(filePath);
  }
});
