import React from "react";
import { Tile, River as RiverType, TileMirror } from "homm3-parsers";
import { Container } from "pixi.js";
import { prepareSpriteProps } from "./utils";
import { Sprite } from "../../../pixi/Sprite";

export function River({ tile, parent }: { tile: Tile; parent: Container }) {
  if (tile.river.type === RiverType.None) return null;
  const image = `river_${tile.river.type}_${tile.river.sprite}.png`;
  return (
    <Sprite
      atlas="terrain"
      image={image}
      parent={parent}
      {...prepareSpriteProps(
        tile.mirror.includes(TileMirror.RiverVertical),
        tile.mirror.includes(TileMirror.RiverHorizontal)
      )}
    />
  );
}
