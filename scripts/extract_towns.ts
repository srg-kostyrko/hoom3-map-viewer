import fs from "fs";
import path from "path";
import jetpack from "fs-jetpack";
import { createImageData, createCanvas } from "canvas";
import pack from "bin-pack";

import * as townTemplates from "../src/components/town/templates";
import { TownTemplate } from "../src/contracts/town";

import { convertPixels, convertBGGtoRGBA } from "./utils";
import { pcxFile, PcxFile, defFile, DefFile, Alignment } from "homm3-parsers";
import { parse, TagProducer } from "binary-markup";
import { Frame } from "./contracts";

interface FileData {
  key: string;
  left: number;
  top: number;
  fullWidth: number;
  fullHeight: number;
  width: number;
  height: number;
  imageData: ImageData;
}

const root = path.resolve(process.cwd(), "src/assets/homm3");

const createPcxImage = (input: PcxFile) => {
  const { width, height } = input;
  let imageData: ImageData | null = null;
  if (input.hasPalette) {
    const { pixels, palette } = input.paletteData;
    imageData = createImageData(convertPixels(pixels, palette), width, height);
  } else if (input.hasBgr) {
    imageData = createImageData(convertBGGtoRGBA(input.bgr), width, height);
  }

  if (!imageData) {
    return null;
  }

  return { imageData, width, height };
};

function extractPcxFile(fileName: string) {
  const content = jetpack.read(
    path.resolve(__dirname, "defs", fileName.toLowerCase()),
    "buffer"
  );
  if (content) {
    return createPcxImage(
      parse<PcxFile>((pcxFile as unknown) as TagProducer<PcxFile>, content)
    );
  } else {
    console.error(`Failed to read ${fileName}`);
  }
  return null;
}

function extractDefFile(
  key: string,
  fileName: string,
  hasAnimation: boolean = true
) {
  const files: FileData[] = [];
  const animations: Record<string, string[]> = {};

  const content = jetpack.read(
    path.resolve(__dirname, "defs", fileName.toLowerCase()),
    "buffer"
  );

  if (content) {
    const parsed = parse<DefFile>(
      (defFile as unknown) as TagProducer<DefFile>,
      content
    );
    const { blocks, palette } = parsed;
    const [block] = blocks;
    for (const [index, fileData] of block.files.entries()) {
      const imageData = createImageData(
        convertPixels(fileData.pixels, palette),
        fileData.width,
        fileData.height
      );

      files.push({
        key: key + (index || ""),
        left: fileData.left,
        top: fileData.top,
        width: fileData.width,
        height: fileData.height,
        fullWidth: fileData.fullWidth,
        fullHeight: fileData.fullHeight,
        imageData
      });
      if (hasAnimation && index > 0) {
        if (!animations[key]) {
          animations[key] = [];
        }
        animations[key].push(key + (index || ""));
      }
    }
  } else {
    console.error(`Failed to read ${fileName}`);
  }

  return { files, animations };
}

function extractTown(name: string, config: TownTemplate) {
  console.info(`Extracting ${name} buildings`);

  const files: FileData[] = [];
  const frames: Record<string, Frame> = {};
  let animations: Record<string, string[]> = {};

  const townBg = extractPcxFile(config.townBackground);
  if (townBg) {
    files.push({
      key: `${name}Background`,
      left: 0,
      top: 0,
      width: townBg.width,
      height: townBg.height,
      fullWidth: townBg.width,
      fullHeight: townBg.height,
      imageData: townBg.imageData
    });
  }

  for (const [key, structConfig] of Object.entries(config.buildings)) {
    if (structConfig) {
      const { files: buildingFiles, animations: buildingAnim } = extractDefFile(
        `${name}${key}`,
        structConfig.gfx.animation,
        !structConfig.gfx.noAnimation
      );
      files.push(...buildingFiles);
      animations = { ...animations, ...buildingAnim };

      const border = extractPcxFile(structConfig.gfx.border);
      if (border) {
        files.push({
          key: `${name}${key}Border`,
          left: 0,
          top: 0,
          width: border.width,
          height: border.height,
          fullWidth: border.width,
          fullHeight: border.height,
          imageData: border.imageData
        });
      }
    }
  }
  for (const [key, structConfig] of Object.entries(config.extras)) {
    if (structConfig) {
      const fileName = structConfig.gfx.toLowerCase();
      const { files: buildingFiles, animations: buildingAnim } = extractDefFile(
        `extra${name}${key}`,
        fileName
      );
      files.push(...buildingFiles);
      animations = { ...animations, ...buildingAnim };
    }
  }
  for (const [key, structConfig] of Object.entries(config.upgrades)) {
    if (structConfig) {
      const fileName = structConfig.gfx.animation.toLowerCase();
      const { files: buildingFiles, animations: buildingAnim } = extractDefFile(
        `upgrade${name}${key}`,
        fileName,
        !structConfig.gfx.noAnimation
      );
      files.push(...buildingFiles);
      animations = { ...animations, ...buildingAnim };
    }
  }
  for (const [index, animation] of config.animations.entries()) {
    const fileName = animation.gfx.toLowerCase();
    const { files: buildingFiles, animations: buildingAnim } = extractDefFile(
      `${name}extraAnimation${index}`,
      fileName
    );
    files.push(...buildingFiles);
    animations = { ...animations, ...buildingAnim };
  }

  const { width, height, items } = pack(files);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

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

  const out = fs.createWriteStream(path.join(root, "towns", `${name}.png`));
  const stream = canvas.createPNGStream();
  stream.pipe(out);

  const atlas = {
    meta: {
      image: `${name}.png`,
      format: "RGBA8888",
      size: { w: width, h: height },
      scale: 1
    },
    frames,
    animations
  };
  fs.writeFile(
    path.join(root, "towns", `${name}.json`),
    JSON.stringify(atlas),
    "utf8",
    err => err && console.error(err)
  );
}

extractTown(Alignment.Castle, townTemplates.castleTemplate);
extractTown(Alignment.Conflux, townTemplates.confluxTemplate);
extractTown(Alignment.Dungeon, townTemplates.dungeonTemplate);
extractTown(Alignment.Fortress, townTemplates.fortressTemplate);
extractTown(Alignment.Inferno, townTemplates.infernoTemplate);
extractTown(Alignment.Necropolis, townTemplates.necropolisTemplate);
extractTown(Alignment.Rampart, townTemplates.rampartTemplate);
extractTown(Alignment.Stronghold, townTemplates.strongholdTemplate);
extractTown(Alignment.Tower, townTemplates.towerTemplate);
