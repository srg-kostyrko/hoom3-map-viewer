import { Container } from "pixi.js";
import {
  MapObject,
  Tile as TileType,
  MapObjectAB,
  MapObjectRoE
} from "homm3-parsers";
import { createTerrain } from "./terrain";
import { drawNavmesh } from "./navmesh";
import { NavMeshType } from "../../contracts/map";
import { createMapObjects } from "./mapObjects";
import { BORDER_WIDTH, TILE_SIZE } from "./MapConst";

const contentPosition = BORDER_WIDTH * TILE_SIZE;

type Props = {
  objects: MapObject[] | MapObjectAB[] | MapObjectRoE[];
  mapSize: number;
  tiles: TileType[];
  navMesh: NavMeshType[];
  onClick: (object: MapObject | MapObjectAB | MapObjectRoE) => void;
};

export function createLevel({
  mapSize,
  tiles,
  objects,
  navMesh,
  onClick
}: Props) {
  const level = new Container();
  level.x = contentPosition;
  level.y = contentPosition;

  level.addChild(createTerrain(tiles, mapSize));
  level.addChild(createMapObjects(objects, onClick));
  const navMeshLayer = drawNavmesh({
    navMesh,
    mapSize
  });
  level.addChild(navMeshLayer);

  return { level, navMeshLayer };
}
