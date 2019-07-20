import {
  Tile,
  MapObject,
  MapObjectAB,
  MapObjectRoE,
  H3MFile
} from "homm3-parsers";
import { NavMeshType, ViewportPosition } from "./map";
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
  viewportPosition: ViewportPosition;
  areResourcesLoaded: boolean;
  changeViewportCenter(x: number, y: number): void;
  changeMap(content: H3MFile): void;
  onObjectClick: (object: MapObject | MapObjectAB | MapObjectRoE) => void;
  onPixiAppCreated: (app: Application) => void;
  onResize: (width: number, height: number) => void;
  markResourcesLoaded(): void;
}
