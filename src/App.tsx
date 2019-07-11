import React from "react";
import { Stage } from "./pixi/Stage";
import { Viewport } from "./pixi/Viewport";
import { Container } from "./pixi/Container";

export const App = () => {
  return (
    <div className="App">
      <Stage>
        <Viewport worldWidth={1000} worldHeight={1000}>
          {viewport => {
            return (
              <>
                <Container parent={viewport}>{() => <></>}</Container>
              </>
            );
          }}
        </Viewport>
      </Stage>
    </div>
  );
};
