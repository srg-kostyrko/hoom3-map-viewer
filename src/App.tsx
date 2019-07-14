import React from "react";
import { Stage } from "./pixi/Stage";
import { Viewport } from "./pixi/Viewport";
import { Container } from "./pixi/Container";
import { Loader } from "./pixi/Loader";
import { resources } from "./assets/homm3/resources";

export const App = () => {
  return (
    <div className="App">
      <Stage>
        <>
          <Loader resources={resources} />
          <Viewport worldWidth={1000} worldHeight={1000}>
            {viewport => {
              return (
                <>
                  <Container parent={viewport}>{() => <></>}</Container>
                </>
              );
            }}
          </Viewport>
        </>
      </Stage>
    </div>
  );
};
