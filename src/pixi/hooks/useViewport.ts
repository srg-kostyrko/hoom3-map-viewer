import { Application, Rectangle } from "pixi.js";
import { useRef } from "react";
import { Viewport } from "pixi-viewport";

interface ViewportOptions {
  worldWidth: number;
  worldHeight: number;
  onMoved(bounds: Rectangle): void;
}

export function useViewport(app: Application, options: ViewportOptions) {
  const viewportRef = useRef<Viewport | null>(null);
  const getViewport = (): Viewport => {
    let viewport = viewportRef.current;
    if (viewport === null) {
      viewport = new Viewport({
        screenWidth: app.stage.width,
        screenHeight: app.stage.height,
        worldWidth: options.worldWidth,
        worldHeight: options.worldHeight,

        interaction: app.renderer.plugins.interaction
      });

      viewport
        .drag()
        .clamp({
          direction: "all"
        })
        .decelerate()
        .on("moved-end", () => {
          if (viewport) {
            const bounds = new Rectangle(
              viewport.left,
              viewport.top,
              viewport.worldScreenWidth,
              viewport.worldScreenHeight
            );
            options.onMoved(bounds);
          }
        });

      // add the viewport to the stage
      app.stage.addChild(viewport);
      viewportRef.current = viewport;
    }
    return viewport;
  };

  return getViewport();
}
