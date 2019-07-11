import React from "react";
import { Tile, Road as RoadType } from "homm3-parsers";
import { prepareSpriteProps } from "./utils";
import { Sprite } from "../../../pixi/Sprite";
import { Container } from "pixi.js";

export function Road({ tile, parent }: { tile: Tile; parent: Container }) {
  if (tile.road.type !== RoadType.None) return null;
  const image = `road_${tile.road.type}_${tile.road.sprite}.png`;
  return (
    <Sprite
      atlas="terrain"
      image={image}
      parent={parent}
      {...prepareSpriteProps(
        tile.mirror.groundVertical,
        tile.mirror.groundHorizontal
      )}
    />
  );
}
