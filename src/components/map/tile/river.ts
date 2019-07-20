import { Tile, River as RiverType, TileMirror } from "homm3-parsers";
import { prepareSpriteProps } from "./utils";
import { createSprite } from "../../../pixi/creators/sprite";

export function createRiver(tile: Tile) {
  if (tile.river.type === RiverType.None) return null;
  const image = `river_${tile.river.type}_${tile.river.sprite}.png`;
  return createSprite(
    Object.assign(
      {
        atlas: "terrain",
        image
      },
      prepareSpriteProps(
        tile.mirror.includes(TileMirror.RiverVertical),
        tile.mirror.includes(TileMirror.RiverHorizontal)
      )
    )
  );
}
