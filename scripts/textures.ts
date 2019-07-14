import fileLists from "./texturesList";
import { Terrain, River, Road } from "homm3-parsers";

export type FileData = {
  file: string;
  name: (index: number, fileName: string) => string;
  limit?: number;
};

export const edges = {
  name: (index: number) => `edge_${index}.png`,
  file: "edg.def"
};

export const grounds = [
  {
    name: (index: number) => `ground_${Terrain.Dirt}_${index}.png`,
    file: "dirttl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Sand}_${index}.png`,
    file: "sandtl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Grass}_${index}.png`,
    file: "grastl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Snow}_${index}.png`,
    file: "snowtl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Swamp}_${index}.png`,
    file: "swmptl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Rough}_${index}.png`,
    file: "rougtl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Sub}_${index}.png`,
    file: "subbtl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Lava}_${index}.png`,
    file: "lavatl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Water}_${index}.png`,
    file: "watrtl.def"
  },
  {
    name: (index: number) => `ground_${Terrain.Rock}_${index}.png`,
    file: "rocktl.def"
  }
];
export const rivers = [
  {
    name: (index: number) => `river_${River.Clear}_${index}.png`,
    file: "clrrvr.def"
  },
  {
    name: (index: number) => `river_${River.Muddy}_${index}.png`,
    file: "mudrvr.def"
  },
  {
    name: (index: number) => `river_${River.Icy}_${index}.png`,
    file: "icyrvr.def"
  },
  {
    name: (index: number) => `river_${River.Lava}_${index}.png`,
    file: "lavrvr.def"
  }
];
export const roads = [
  {
    name: (index: number) => `road_${Road.Dirt}_${index}.png`,
    file: "dirtrd.def"
  },
  {
    name: (index: number) => `road_${Road.Gravel}_${index}.png`,
    file: "gravrd.def"
  },
  {
    name: (index: number) => `road_${Road.Cobble}_${index}.png`,
    file: "cobbrd.def"
  }
];
const name = (_: number, fileName: string) => fileName;

const extractFile = (e: FileData): string => e.file;
const fileData = (file: string): FileData => ({ file, name, limit: 1 });

export const textures = [
  ...rivers.map(extractFile),
  ...grounds.map(extractFile),
  ...roads.map(extractFile),
  ...fileLists.towns,
  ...fileLists.monsters,
  ...fileLists.impassable_terrain,
  ...fileLists.passable_terrain,
  ...fileLists.visitable,
  ...fileLists.dwelling,
  ...fileLists.artifact,
  ...fileLists.hero,
  ...fileLists.resource,
  edges.file
];

export const towns = fileLists.towns.map(fileData);
export const monsters = fileLists.monsters.map(fileData);
export const impassableTerrain = fileLists.impassable_terrain.map(fileData);
export const passableTerrain = fileLists.passable_terrain.map(fileData);
export const visitable = fileLists.visitable.map(fileData);
export const dwelling = fileLists.dwelling.map(fileData);
export const artifact = fileLists.artifact.map(fileData);
export const hero = fileLists.hero.map(fileData);
export const resource = fileLists.resource.map(fileData);
