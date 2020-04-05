import path from "path";
import fs from "fs";
import zlib from "zlib";
import glob from "glob";

import { LodFile, lodFile } from "homm3-parsers";
import { parse, TagProducer } from "binary-markup";

const dirPath = path.resolve(__dirname, "in");

interface LodFileEntry {
  name: string;
  size: number;
  csize: number;
  compressed: boolean;
  content: number[];
}

const saveFile = async (file: LodFileEntry) => {
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

function parseFile(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.readFile(
      filePath,
      async (err, data): Promise<void> => {
        if (err) {
          reject(err);
          return;
        }
        const fileData = parse<LodFile>(
          (lodFile as unknown) as TagProducer<LodFile>,
          data
        );

        for (const file of fileData.entries) {
          console.log(`Saving file ${file.name.toLowerCase()}`);
          await saveFile(file);
        }
        resolve();
      }
    );
  });
}

glob(`${dirPath}/*.lod`, async (error, files) => {
  if (error) {
    console.error(error);
  }
  for (const filePath of files) {
    console.log(filePath);
    await parseFile(filePath);
  }
});
