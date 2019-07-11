// @flow
import { useEffect, useRef } from "react";
import { Graphics, Container } from "pixi.js";
import { range } from "../../utils";
import { PassabilityType } from "../../contracts/map";
import { TILE_SIZE } from "./MapConst";

const ACTIVE_COLOR = 0xffff00;
const NOT_PASSABLE_COLOR = 0xff0000;

type Props = {
  parent: Container;
  mapSize: number;
  visible: boolean;
  passability: PassabilityType[];
};

export function Passability({ parent, mapSize, passability, visible }: Props) {
  const layerRef = useRef(new Graphics());
  useEffect(() => {
    const layer = layerRef.current;
    for (const yIndex of range(mapSize)) {
      for (const xIndex of range(mapSize)) {
        const tileIndex = yIndex * mapSize + xIndex;
        const tile = passability[tileIndex];
        if (tile !== PassabilityType.Passable) {
          if (tile === PassabilityType.Active) {
            layer.beginFill(ACTIVE_COLOR, 0.3);
            layer.lineStyle(1, ACTIVE_COLOR, 1, 0);
          } else if (tile === PassabilityType.NotPassable) {
            layer.beginFill(NOT_PASSABLE_COLOR, 0.3);
            layer.lineStyle(1, NOT_PASSABLE_COLOR, 1, 0);
          }
          const x = xIndex * TILE_SIZE;
          const y = yIndex * TILE_SIZE;
          layer.drawRect(x, y, TILE_SIZE, TILE_SIZE);
        }
      }
    }
    layer.endFill();
    layer.cacheAsBitmap = true;
    layer.interactive = false;
    layer.interactiveChildren = false;
    parent.addChild(layer);

    return () => {
      parent.removeChild(layer);
    };
  });

  useEffect(() => {
    const layer = layerRef.current;
    layer.visible = visible;
  }, [visible]);
  return null;
}
