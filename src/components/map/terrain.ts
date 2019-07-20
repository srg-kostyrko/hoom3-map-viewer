import { Container } from "pixi.js";
import { Tile as TileType } from "homm3-parsers";

import { indexToXYIndex } from "../../utils";
import { createTile } from "./tile/tile";

export function createTerrain(tiles: TileType[], mapSize: number) {
  const terrain = new Container();

  terrain.cacheAsBitmap = true;
  terrain.interactive = false;
  terrain.interactiveChildren = false;

  for (const [index, tile] of tiles.entries()) {
    const { xIndex, yIndex } = indexToXYIndex(index, mapSize);
    terrain.addChild(createTile(tile, xIndex, yIndex));
  }
  return terrain;
}
