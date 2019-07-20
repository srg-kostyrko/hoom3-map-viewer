import { Tile as TileType } from "homm3-parsers";
import { TILE_SIZE } from "../MapConst";
import { createGround } from "./ground";
import { createRiver } from "./river";
import { createRoad } from "./road";
import { Container } from "pixi.js";

export function createTile(tile: TileType, xIndex: number, yIndex: number) {
  const tileContainer = new Container();

  tileContainer.x = xIndex * TILE_SIZE;
  tileContainer.y = yIndex * TILE_SIZE;

  const ground = createGround(tile);
  tileContainer.addChild(ground);
  const river = createRiver(tile);
  if (river) {
    tileContainer.addChild(river);
  }
  const road = createRoad(tile);
  if (road) {
    tileContainer.addChild(road);
  }

  return tileContainer;
}
