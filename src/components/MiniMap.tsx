import React, { useRef, useCallback, useEffect, useState } from "react";
import { XL_MAP, TILE_SIZE } from "./map/MapConst";
import { Terrain } from "homm3-parsers";
import { observer } from "mobx-react-lite";
import { range } from "../utils";
import { calculateMiniMapViewport } from "../helpers/map";
import { useAppStore } from "../store/AppStore";
import { MapData } from "../contracts/app";

import "./MiniMap.css";

const MIN_TILE_SIZE = 2;
const CANVAS_SIZE = MIN_TILE_SIZE * XL_MAP;

const colors = {
  [Terrain.Dirt]: "rgb(93,52,0)",
  [Terrain.Sand]: "rgb(230,210,132)",
  [Terrain.Grass]: "rgb(0,69,0)",
  [Terrain.Snow]: "rgb(170,201,200)",
  [Terrain.Swamp]: "rgb(0,140,108)",
  [Terrain.Rough]: "rgb(141,118,28)",
  [Terrain.Sub]: "rgb(164,15,0)",
  [Terrain.Lava]: "rgb(73,73,73)",
  [Terrain.Water]: "rgb(0,75,153)",
  [Terrain.Rock]: "rgb(0,0,0)"
};

export const MiniMap = observer(({ mapData }: { mapData: MapData }) => {
  const app = useAppStore();
  const { mapSize, levels } = mapData;
  const level = levels.ground;
  const canvas = useRef<HTMLCanvasElement>(null);
  const [rulerStyle, setRuleStyle] = useState({});
  const tileSize = CANVAS_SIZE / mapSize;

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (canvas.current) {
        const { left: x, top: y } = canvas.current.getBoundingClientRect();
        const { clientX, clientY } = e;
        const relativeX = clientX - x;
        const relativeY = clientY - y;
        const tileX = Math.floor(relativeX / tileSize) * TILE_SIZE;
        const tileY = Math.floor(relativeY / tileSize) * TILE_SIZE;
        app.changeViewportCenter(tileX, tileY);
      }
    },
    [app, tileSize]
  );

  useEffect(() => {
    if (canvas.current && level.tiles.length) {
      const context = canvas.current.getContext("2d");
      if (context) {
        context.fillStyle = "#000000";
        context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        const roundedSize = Math.round(tileSize);
        for (const yIndex of range(mapSize)) {
          for (const xIndex of range(mapSize)) {
            const tileIndex = yIndex * mapSize + xIndex;
            const tile = level.tiles[tileIndex];
            context.fillStyle = colors[tile.terrain.type];
            context.fillRect(
              xIndex * tileSize,
              yIndex * tileSize,
              roundedSize,
              roundedSize
            );
          }
        }
      }
    }
  }, [canvas, tileSize, mapSize, level]);

  useEffect(() => {
    const miniMapViewport = calculateMiniMapViewport(
      app.viewportPosition,
      mapSize
    );
    setRuleStyle({
      top: Math.floor(miniMapViewport.y / TILE_SIZE) * tileSize,
      left: Math.floor(miniMapViewport.x / TILE_SIZE) * tileSize,
      width: Math.floor(miniMapViewport.width / TILE_SIZE) * tileSize,
      height: Math.floor(miniMapViewport.height / TILE_SIZE) * tileSize
    });
  }, [tileSize, mapSize, app.viewportPosition]);

  return (
    <div className="mini-map">
      <canvas
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        ref={canvas}
        onClick={onClick}
      />
      <div className="mini-map-ruler" style={rulerStyle} />
    </div>
  );
});
