import fs from "fs";
import jetpack from "fs-jetpack";
import path from "path";
import { createImageData, createCanvas } from "canvas";

import { animationsNameMap } from "./animations";
import { convertPixels } from "./utils";
import { parse } from "binary-markup";
import { defFile } from "homm3-parsers";

const root = path.resolve(process.cwd(), "src/assets/homm3");

const prepareData = (input, name) => {
  const { palette } = input;
  const files = [];
  for (const block of input.blocks.slice(0, 2)) {
    for (const [fileIndex, fileData] of block.files.entries()) {
      files.push({
        name: `${name}_${block.block_id}_${fileIndex}`,
        block_id: block.block_id,
        size: fileData.size,
        full_width: fileData.full_width,
        full_height: fileData.full_height,
        width: fileData.width,
        height: fileData.height,
        left: fileData.left,
        top: fileData.top,
        imageData: convertPixels(fileData.pixels, palette)
      });
    }
  }
  return files;
};

const prepareAtlas = files => {
  const frames = {};
  const animations = {};
  const items = [];
  let x = 0;
  const y = 0;
  let width = 0;
  let height = 0;

  for (const file of files) {
    items.push({
      x,
      y,
      width: file.width,
      height: file.height,
      imageData: file.imageData
    });
    frames[file.name] = {
      frame: { x, y, w: file.width, h: file.height },
      rotated: false,
      trimmed:
        file.width !== file.full_width || file.height !== file.full_height,
      spriteSourceSize: {
        x: file.left,
        y: file.top,
        w: file.full_width,
        h: file.full_height
      },
      sourceSize: { w: file.full_width, h: file.full_height }
    };
    x += file.width;
    width += file.width;
    height = Math.max(height, file.height);
    if (file.block_id) {
      if (!animations[file.block_id]) {
        animations[file.block_id] = [];
      }
      animations[file.block_id].push(file.name);
    }
  }

  return {
    animations,
    items,
    frames,
    width,
    height
  };
};

for (const [fileName, type] of Object.entries(animationsNameMap)) {
  console.info(`Processing ${type} animation...`);
  const content = jetpack.read(
    path.resolve(__dirname, "defs", fileName),
    "buffer"
  );
  const parsedContent = parse(defFile, content);

  const data = prepareData(parsedContent, type);
  const { items, frames, animations, width, height } = prepareAtlas(data);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  for (const position of items) {
    const imageData = createImageData(
      position.imageData,
      position.width,
      position.height
    );
    ctx.putImageData(imageData, position.x, position.y);
  }
  const out = fs.createWriteStream(path.join(root, "textures", `${type}.png`));
  const stream = canvas.createPNGStream();
  stream.pipe(out);

  const atlas = {
    meta: {
      image: `${type}.png`,
      format: "RGBA8888",
      size: { w: width, h: height },
      scale: 1
    },
    frames,
    animations
  };
  fs.writeFile(
    path.join(root, "textures", `${type}.json`),
    JSON.stringify(atlas),
    "utf8",
    err => err && console.error(err)
  );
}
