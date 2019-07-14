import fs from "fs";
import jetpack from "fs-jetpack";
import path from "path";
import { createImageData, createCanvas } from "canvas";
import pack from "bin-pack";

import * as fileLists from "./textures";
import { convertPixels } from "./utils";
import { parse, TagProducer } from "binary-markup";
import { defFile, DefFile } from "homm3-parsers";

interface FileData {
  name: string;
  size: number;
  fullWidth: number;
  fullHeight: number;
  width: number;
  height: number;
  left: number;
  top: number;
  imageData: Uint8ClampedArray;
}

interface Frame {
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
}

const root = path.resolve(process.cwd(), "src/assets/homm3");

const prepareGroup = (
  group: DefFile,
  groupName: string,
  nameFn: (index: number, groupName: string) => string,
  limit?: number
): FileData[] => {
  const { palette } = group;
  const files: FileData[] = [];
  for (const block of group.blocks) {
    let count = 0;
    for (const [fileIndex, fileData] of block.files.entries()) {
      files.push({
        name: nameFn(fileIndex, groupName),
        size: fileData.size,
        fullWidth: fileData.fullWidth,
        fullHeight: fileData.fullHeight,
        width: fileData.width,
        height: fileData.height,
        left: fileData.left,
        top: fileData.top,
        imageData: convertPixels(fileData.pixels, palette)
      });
      count += 1;
      if (limit && count >= limit) break;
    }
  }
  return files;
};

const prepareAtlas = (groups: FileData[][]) => {
  const files = groups.reduce((acc, group) => acc.concat(group), []);
  const { width, height, items } = pack(files);

  const frames: { [key: string]: Frame } = {};

  for (const file of items) {
    frames[file.item.name] = {
      frame: { x: file.x, y: file.y, w: file.width, h: file.height },
      rotated: false,
      trimmed:
        file.width !== file.item.fullWidth ||
        file.height !== file.item.fullHeight,
      spriteSourceSize: {
        x: file.item.left,
        y: file.item.top,
        w: file.item.fullWidth,
        h: file.item.fullHeight
      },
      sourceSize: { w: file.item.fullWidth, h: file.item.fullHeight }
    };
  }

  return {
    items,
    frames,
    width,
    height
  };
};

const generateTexture = async (
  name: string,
  list: Array<{
    file: string;
    name: (index: number, groupName: string) => string;
    limit?: number;
  }>
) => {
  console.log(`Generating ${name} texture...`);
  const groupPromises = [];
  for (const desc of list) {
    groupPromises.push(
      jetpack.readAsync(path.resolve(__dirname, "defs", desc.file), "buffer")
    );
  }
  const groups = (await Promise.all(groupPromises))
    .map((group, index) => {
      if (group) {
        console.log(`Parsing ${list[index].file}`);
        return prepareGroup(
          parse<DefFile>((defFile as unknown) as TagProducer<DefFile>, group),
          list[index].file,
          list[index].name,
          list[index].limit
        );
      } else {
        console.error(`Failed to read group ${group}`);
      }
      return undefined;
    })
    .filter<FileData[]>((x): x is FileData[] => !!x);

  const { items, frames, width, height } = prepareAtlas(groups);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  for (const position of items) {
    const imageData = createImageData(
      position.item.imageData,
      position.item.width,
      position.item.height
    );
    ctx.putImageData(imageData, position.x, position.y);
  }
  const out = fs.createWriteStream(path.join(root, "textures", `${name}.png`));
  const stream = canvas.createPNGStream();
  stream.pipe(out);

  const atlas = {
    meta: {
      image: `${name}.png`,
      format: "RGBA8888",
      size: { w: width, h: height },
      scale: 1
    },
    frames
  };
  fs.writeFile(
    path.join(root, "textures", `${name}.json`),
    JSON.stringify(atlas),
    "utf8",
    err => err && console.error(err)
  );
};

(async () => {
  await generateTexture(
    "terrain",
    fileLists.roads.concat(fileLists.rivers).concat(fileLists.grounds)
  );
  await generateTexture("towns", fileLists.towns);
  await generateTexture("monsters", fileLists.monsters);
  await generateTexture("impassable_terrain", fileLists.impassableTerrain);
  await generateTexture("passable_terrain", fileLists.passableTerrain);
  await generateTexture("visitable", fileLists.visitable);
  await generateTexture("dwelling", fileLists.dwelling);
  await generateTexture("artifact", fileLists.artifact);
  await generateTexture("hero", fileLists.hero);
  await generateTexture("resource", fileLists.resource);
  await generateTexture("edges", [fileLists.edges]);
})();
