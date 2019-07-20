import { Tile, Road as RoadType, TileMirror } from "homm3-parsers";
import { prepareSpriteProps } from "./utils";
import { createSprite } from "../../../pixi/creators/sprite";

export function createRoad(tile: Tile) {
  if (tile.road.type === RoadType.None) return null;
  const image = `road_${tile.road.type}_${tile.road.sprite}.png`;
  return createSprite(
    Object.assign(
      {
        atlas: "terrain",
        image
      },
      prepareSpriteProps(
        tile.mirror.includes(TileMirror.RoadVertical),
        tile.mirror.includes(TileMirror.RoadHorizontal)
      )
    )
  );
}
