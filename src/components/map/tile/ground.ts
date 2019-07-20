import { Tile, TileMirror } from "homm3-parsers";
import { createSprite } from "../../../pixi/creators/sprite";
import { prepareSpriteProps } from "./utils";

export function createGround(tile: Tile) {
  const image = `ground_${tile.terrain.type}_${tile.terrain.sprite}.png`;
  return createSprite(
    Object.assign(
      {
        atlas: "terrain",
        image
      },
      prepareSpriteProps(
        tile.mirror.includes(TileMirror.TerrainVertical),
        tile.mirror.includes(TileMirror.TerrainHorizontal)
      )
    )
  );
}
