import fs from "fs";
import jetpack from "fs-jetpack";
import path from "path";
import { createImageData, createCanvas } from "canvas";

import { animationsNameMap } from "./animations";
import { convertPixels } from "./utils";
import { parse, TagProducer } from "binary-markup";
import { defFile, DefFile } from "homm3-parsers";

const root = path.resolve(process.cwd(), "src/assets/homm3");

type AnimationsPreparedData = {
  name: string;
  block_id: number;
  size: number;
  full_width: number;
  full_height: number;
  width: number;
  height: number;
  left: number;
  top: number;
  imageData: Uint8ClampedArray;
};

type Frame = {
  frame: { x: number; y: number; w: number; h: number };
  rotated: boolean;
  trimmed: boolean;
  spriteSourceSize: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  sourceSize: { w: number; h: number };
};

const prepareData = (input: DefFile, name: string) => {
  const { palette } = input;
  const files: AnimationsPreparedData[] = [];
  for (const block of input.blocks) {
    for (const [fileIndex, fileData] of block.files.entries()) {
      files.push({
        name: `${name}_${block.blockId}_${fileIndex}`,
        block_id: block.blockId,
        size: fileData.size,
        full_width: fileData.fullWidth,
        full_height: fileData.fullHeight,
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

const prepareAtlas = (files: AnimationsPreparedData[]) => {
  const frames: { [key: string]: Frame } = {};
  const animations: Record<number, string[]> = {};
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
    if (!animations[file.block_id]) {
      animations[file.block_id] = [];
    }
    animations[file.block_id].push(file.name);
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
  if (content) {
    const parsedContent = parse(
      (defFile as unknown) as TagProducer<DefFile>,
      content
    );

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
    const out = fs.createWriteStream(
      path.join(root, "textures", `${type}.png`)
    );
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
}
