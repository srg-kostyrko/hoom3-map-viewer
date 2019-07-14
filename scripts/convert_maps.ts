import fs from "fs";
import path from "path";
import glob from "glob";
import { parseH3MFile } from "homm3-parsers";

const dirPath = path.resolve(process.cwd(), "src/assets/homm3/maps");

const processFile = async (filePath: string) => {
  const data = fs.readFileSync(filePath);
  const fileData = parseH3MFile(data);

  const name = path.basename(filePath, path.extname(filePath));
  fs.writeFile(
    path.join(dirPath, `${name}.json`),
    JSON.stringify(fileData, null, 2),
    "utf8",
    err => err && console.error(err)
  );
};

glob(`${dirPath}/*.h3m`, (error, files) => {
  for (const filePath of files) {
    processFile(filePath);
  }
});
