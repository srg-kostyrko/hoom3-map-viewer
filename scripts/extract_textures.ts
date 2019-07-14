import fs from "fs";
import jetpack from "fs-jetpack";
import path from "path";
import { createImageData, createCanvas } from "canvas";
import pack from "bin-pack";

import * as fileLists from "./textures";
import { convertPixels } from "./utils";
import { parse } from "binary-markup";
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

  const frames = {};

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
  const groups = (await Promise.all(groupPromises)).map((group, index) =>
    prepareGroup(
      parse(defFile, group),
      list[index].file,
      list[index].name,
      list[index].limit
    )
  );

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

generateTexture(
  "terrain",
  fileLists.roads.concat(fileLists.rivers).concat(fileLists.grounds)
);
generateTexture("towns", fileLists.towns);
generateTexture("monsters", fileLists.monsters);
generateTexture("impassable_terrain", fileLists.impassableTerrain);
generateTexture("passable_terrain", fileLists.passableTerrain);
generateTexture("visitable", fileLists.visitable);
generateTexture("dwelling", fileLists.dwelling);
generateTexture("artifact", fileLists.artifact);
generateTexture("hero", fileLists.hero);
generateTexture("resource", fileLists.resource);
generateTexture("edges", [fileLists.edges]);
