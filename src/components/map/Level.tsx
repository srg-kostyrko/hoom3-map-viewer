// @flow
import React from "react";
import { Container as PixiContainer } from "pixi.js";
import { MapObject, Tile as TileType } from "homm3-parsers";
import { Container } from "../../pixi/Container";
import { Terrain } from "./Terrain";
import { Passability } from "./Passability";
import { PassabilityType } from "../../contracts/map";
import { MapObjects } from "./MapObjects";
import { BORDER_WIDTH, TILE_SIZE } from "./MapConst";

const contentPosition = BORDER_WIDTH * TILE_SIZE;

type Props = {
  objects: MapObject[];
  mapSize: number;
  tiles: TileType[];
  passability: PassabilityType[];
  passabilityShown: boolean;
  parent: PixiContainer;
};

export function Level({
  mapSize,
  tiles,
  objects,
  parent,
  passability,
  passabilityShown
}: Props) {
  return (
    <Container x={contentPosition} y={contentPosition} parent={parent}>
      {container => (
        <>
          <Terrain parent={container} mapSize={mapSize} tiles={tiles} />
          <MapObjects parent={container} objects={objects} onClick={() => {}} />
          <Passability
            parent={container}
            mapSize={mapSize}
            passability={passability}
            visible={passabilityShown}
          />
        </>
      )}
    </Container>
  );
}
