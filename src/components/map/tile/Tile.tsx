import React, { useEffect } from "react";
import { Tile as TileType } from "homm3-parsers";
import { useContainer } from "../../../pixi/hooks/useContainer";
import { TILE_SIZE } from "../MapConst";
import { Ground } from "./Ground";
import { River } from "./River";
import { Road } from "./Road";
import { Container } from "pixi.js";

interface TileProps {
  tile: TileType;
  xIndex: number;
  yIndex: number;
  parent: Container;
}

export function Tile({ tile, xIndex, yIndex, parent }: TileProps) {
  const container = useContainer();

  useEffect(() => {
    parent.addChild(container);
  });

  useEffect(() => {
    container.x = xIndex * TILE_SIZE;
    container.y = yIndex * TILE_SIZE;
  }, [container, xIndex, yIndex]);

  return (
    <>
      <Ground tile={tile} parent={container} />
      <River tile={tile} parent={container} />
      <Road tile={tile} parent={container} />
    </>
  );
}
