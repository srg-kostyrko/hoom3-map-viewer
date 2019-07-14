import React from "react";
import { Container } from "pixi.js";
import { Tile, TileMirror } from "homm3-parsers";
import { Sprite } from "../../../pixi/Sprite";
import { prepareSpriteProps } from "./utils";

export function Ground({ tile, parent }: { tile: Tile; parent: Container }) {
  const image = `ground_${tile.terrain.type}_${tile.terrain.sprite}.png`;
  return (
    <Sprite
      atlas="terrain"
      image={image}
      parent={parent}
      {...prepareSpriteProps(
        tile.mirror.includes(TileMirror.TerrainVertical),
        tile.mirror.includes(TileMirror.TerrainHorizontal)
      )}
    />
  );
}
