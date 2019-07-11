import React from "react";
import { Container as PixiContainer } from "pixi.js";
import { Container } from "../../pixi/Container";
import { Level } from "./Level";
import { MapBorders } from "./MapBorders";
type Props = {
  mapSize: number;
  parent: PixiContainer;
};

export function Map({ parent, mapSize }: Props) {
  return (
    <Container parent={parent}>
      {container => (
        <>
          <Level
            parent={container}
            objects={[]}
            mapSize={mapSize}
            tiles={[]}
            passability={[]}
            passabilityShown
          />
          <MapBorders parent={container} mapSize={mapSize} />
        </>
      )}
    </Container>
  );
}
