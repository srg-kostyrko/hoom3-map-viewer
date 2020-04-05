import path from "path";
import fs from "fs";
import jetpack from "fs-jetpack";

import { Creature, DefFile, defFile } from "homm3-parsers";
import { CreatureConfig } from "../src/contracts/creature";
import { creatureConfig } from "../src/components/creature/config";
import pack from "bin-pack";
import { createCanvas, createImageData } from "canvas";
import { Frame, FileData } from "./contracts";
import { parse } from "binary-markup";
import { convertPixels } from "./utils";

const root = path.resolve(process.cwd(), "src/assets/homm3");

const includeIndexes = [0, 12];

export function extractDefFile(key: string, fileName: string) {
  const files: FileData[] = [];
  const animations: Record<string, string[]> = {};

  const content = jetpack.read(
    path.resolve(__dirname, "defs", fileName.toLowerCase()),
    "buffer"
  );

  if (content) {
    const parsed = parse<DefFile>(defFile, content);
    const { blocks, palette } = parsed;
    for (const [blockIndex, block] of blocks.entries()) {
      if (!includeIndexes.includes(blockIndex)) {
        continue;
      }
      const blockKey = `${key}_${blockIndex}`;
      for (const [index, fileData] of block.files.entries()) {
        const fileKey = `${blockKey}_${index}`;
        const imageData = createImageData(
          convertPixels(fileData.pixels, palette),
          fileData.width,
          fileData.height
        );

        files.push({
          key: fileKey,
          left: fileData.left,
          top: fileData.top,
          width: fileData.width,
          height: fileData.height,
          fullWidth: fileData.fullWidth,
          fullHeight: fileData.fullHeight,
          imageData
        });
        if (!animations[blockKey]) {
          animations[blockKey] = [];
        }
        animations[blockKey].push(fileKey);
      }
    }
  } else {
    console.error(`Failed to read ${fileName}`);
  }

  return { files, animations };
}

function extractCreature(creature: Creature, config: CreatureConfig) {
  console.log(`Extracting ${creature}...`);
  const { files, animations } = extractDefFile(creature, config.graphics);
  const { width, height, items } = pack(files);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  const frames: Record<string, Frame> = {};

  for (const { x, y, item } of items) {
    ctx.putImageData(item.imageData, x, y);
    frames[item.key] = {
      frame: { x, y, w: item.width, h: item.height },
      rotated: false,
      trimmed: item.width !== item.fullWidth || item.height !== item.fullHeight,
      spriteSourceSize: {
        x: item.left,
        y: item.top,
        w: item.fullWidth,
        h: item.fullHeight
      },
      sourceSize: { w: item.fullWidth, h: item.fullHeight }
    };
  }

  const out = fs.createWriteStream(
    path.join(root, "creatures", `${creature}.png`)
  );
  const stream = canvas.createPNGStream();
  stream.pipe(out);

  const atlas = {
    meta: {
      image: `${creature}.png`,
      format: "RGBA8888",
      size: { w: width, h: height },
      scale: 1
    },
    frames,
    animations
  };
  fs.writeFile(
    path.join(root, "creatures", `${creature}.json`),
    JSON.stringify(atlas),
    "utf8",
    err => err && console.error(err)
  );
}

for (const [creature, config] of Object.entries(creatureConfig)) {
  extractCreature(creature as Creature, config);
}
