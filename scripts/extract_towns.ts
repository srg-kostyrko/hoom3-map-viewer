import fs from "fs";
import path from "path";
import jetpack from "fs-jetpack";
import { createImageData, createCanvas } from "canvas";
import pack from "bin-pack";

import castleConfig from "./towns/castle";
import confluxConfig from "./towns/conflux";
import dungeonConfig from "./towns/dungeon";
import fortressConfig from "./towns/fortress";
import infernoConfig from "./towns/inferno";
import necropolisConfig from "./towns/necropolis";
import rampartConfig from "./towns/rampart";
import strongholdConfig from "./towns/stronghold";
import towerConfig from "./towns/tower";

import { convertPixels, convertBGGtoRGBA } from "./utils";
import { pcxFile, PcxFile, defFile, DefFile, Alignment } from "homm3-parsers";
import { parse, TagProducer } from "binary-markup";
import { TownConfig } from "./towns";

const root = path.resolve(process.cwd(), "src/assets/homm3");

const createPcxImage = (input: PcxFile) => {
  const { width, height } = input;
  let imageData;
  if (input.hasPalette) {
    const { pixels, palette } = input.paletteData;
    imageData = convertPixels(pixels, palette);
  } else if (input.hasBgr) {
    imageData = convertBGGtoRGBA(input.bgr);
  }

  return { imageData, width, height };
};

const cssRules = [
  `.town--buildings {
  position: relative;
  width: 800px;
  height: 374px;
}`
];

function extractBackground(name: string, config: TownConfig) {
  const bgFile = jetpack.read(
    path.resolve(__dirname, "defs", config.town.townBackground.toLowerCase()),
    "buffer"
  );
  if (bgFile) {
    const { width, height, imageData } = createPcxImage(
      parse<PcxFile>((pcxFile as unknown) as TagProducer<PcxFile>, bgFile)
    );

    if (imageData) {
      cssRules.push(`.town--${name} .town--buildings {
  background-image: url(./${name}-bg.png);
}`);

      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");
      ctx.putImageData(createImageData(imageData, width, height), 0, 0);

      const out = fs.createWriteStream(
        path.join(root, "towns", `${name}-bg.png`)
      );
      const stream = canvas.createPNGStream();
      stream.pipe(out);
    }
  }
}

function extractTown(name: string, config: TownConfig) {
  console.info(`Extracting ${name} buildings`);

  extractBackground(name, config);

  const files = [];
  for (const [key, structConfig] of Object.entries(config.town.structures)) {
    if (structConfig && structConfig.animation) {
      const fileName = structConfig.animation.toLowerCase();
      const content = jetpack.read(
        path.resolve(__dirname, "defs", fileName),
        "buffer"
      );
      if (content) {
        const parsed = parse<DefFile>(
          (defFile as unknown) as TagProducer<DefFile>,
          content
        );
        const { blocks, palette } = parsed;
        const [block] = blocks;
        const [fileData] = block.files;

        const imageData = createImageData(
          convertPixels(fileData.pixels, palette),
          fileData.width,
          fileData.height
        );
        const canvas = createCanvas(fileData.fullWidth, fileData.fullHeight);
        const ctx = canvas.getContext("2d");
        ctx.putImageData(imageData, fileData.left, fileData.top);

        files.push({
          key,
          structConfig,
          width: fileData.fullWidth,
          height: fileData.fullHeight,
          imageData: ctx.getImageData(
            0,
            0,
            fileData.fullWidth,
            fileData.fullHeight
          )
        });
      }
    }
  }

  const { width, height, items } = pack(files);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  cssRules.push(`.town--${name} .building {
  position: absolute;
  background-image: url(./${name}-buildings.png);
}`);

  for (const { x, y, item } of items) {
    ctx.putImageData(item.imageData, x, y);
    cssRules.push(`.town--${name} .building--${item.key} {
  width: ${item.width}px;
  height: ${item.height}px;
  left: ${item.structConfig.x}px;
  top: ${item.structConfig.y}px;
  z-index: ${item.structConfig.z !== undefined ? item.structConfig.z + 3 : 3};
  background-position: -${x}px -${y}px
}`);
  }

  const out = fs.createWriteStream(
    path.join(root, "towns", `${name}-buildings.png`)
  );
  const stream = canvas.createPNGStream();
  stream.pipe(out);
}

extractTown(Alignment.Castle, castleConfig);
extractTown(Alignment.Conflux, confluxConfig);
extractTown(Alignment.Dungeon, dungeonConfig);
extractTown(Alignment.Fortress, fortressConfig);
extractTown(Alignment.Inferno, infernoConfig);
extractTown(Alignment.Necropolis, necropolisConfig);
extractTown(Alignment.Rampart, rampartConfig);
extractTown(Alignment.Stronghold, strongholdConfig);
extractTown(Alignment.Tower, towerConfig);

fs.writeFile(
  path.join(root, "towns", `buildings.css`),
  cssRules.join("\n\n"),
  "utf8",
  err => err && console.error(err)
);
