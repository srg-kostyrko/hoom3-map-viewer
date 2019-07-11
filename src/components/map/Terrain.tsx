// @flow
import React, { useEffect } from "react";
import { Container } from "pixi.js";
import { Tile as TileType } from "homm3-parsers";

import { indexToXYIndex } from "../../utils";
import { Tile } from "./tile/Tile";
import { useContainer } from "../../pixi/hooks/useContainer";

type Props = {
  mapSize: number;
  tiles: TileType[];
  parent: Container;
};

export function Terrain({ parent, tiles, mapSize }: Props) {
  const terrain = useContainer();

  useEffect(() => {
    terrain.cacheAsBitmap = true;
    terrain.interactive = false;
    terrain.interactiveChildren = false;

    return () => {
      parent.removeChild(terrain);
    };
  });

  return (
    <>
      {tiles.map((tile, index) => {
        const { xIndex, yIndex } = indexToXYIndex(index, mapSize);
        return (
          <Tile
            key={index}
            tile={tile}
            parent={terrain}
            xIndex={xIndex}
            yIndex={yIndex}
          />
        );
      })}
    </>
  );
}
