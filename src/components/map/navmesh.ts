import { Graphics } from "pixi.js";
import { range } from "../../utils";
import { NavMeshType } from "../../contracts/map";
import { TILE_SIZE } from "./MapConst";

const ACTIVE_COLOR = 0xffff00;
const NOT_PASSABLE_COLOR = 0xff0000;

type Props = {
  mapSize: number;
  navMesh: NavMeshType[];
};

export function drawNavmesh({ mapSize, navMesh }: Props) {
  const layer = new Graphics();
  for (const yIndex of range(mapSize)) {
    for (const xIndex of range(mapSize)) {
      const tileIndex = yIndex * mapSize + xIndex;
      const tileType = navMesh[tileIndex];
      if (tileType !== NavMeshType.Passable) {
        if (tileType === NavMeshType.Active) {
          layer.beginFill(ACTIVE_COLOR, 0.3);
          layer.lineStyle(1, ACTIVE_COLOR, 1, 0);
        } else if (tileType === NavMeshType.NotPassable) {
          layer.beginFill(NOT_PASSABLE_COLOR, 0.3);
          layer.lineStyle(1, NOT_PASSABLE_COLOR, 1, 0);
        }
        const x = xIndex * TILE_SIZE;
        const y = yIndex * TILE_SIZE;
        layer.drawRect(x, y, TILE_SIZE, TILE_SIZE);
      }
    }
  }
  layer.endFill();
  layer.cacheAsBitmap = true;
  layer.interactive = false;
  layer.interactiveChildren = false;

  return layer;
}
