import { Tile, MapObject, MapObjectAB, MapObjectRoE } from "homm3-parsers";
import { NavMeshType } from "./map";
import { Application } from "pixi.js";

export interface LevelData {
  tiles: Tile[];
  objects: MapObject[] | MapObjectAB[] | MapObjectRoE[];
  navmesh: NavMeshType[];
}

export type MapData = {
  mapSize: number;
  hasTwoLevels: boolean;
  levels: {
    ground: LevelData;
    sub: LevelData | null;
  };
};

export interface IAppStore {
  mapData: MapData | null;
  areResourcesLoaded: boolean;
  onObjectClick: (object: MapObject | MapObjectAB | MapObjectRoE) => void;
  onPixiAppCreated: (app: Application) => void;
  onResize: (width: number, height: number) => void;
  markResourcesLoaded(): void;
}
