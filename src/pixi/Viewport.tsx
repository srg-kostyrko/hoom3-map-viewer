import { usePixiApp } from "./hooks/usePixiApp";
import { useViewport } from "./hooks/useViewport";
import { Viewport as PixiViewport } from "pixi-viewport";
import { useEffect } from "react";

export function Viewport({
  children,
  worldWidth,
  worldHeight
}: {
  children: (viewport: PixiViewport) => JSX.Element;
  worldWidth: number;
  worldHeight: number;
}) {
  const app = usePixiApp();
  const viewport = useViewport(app, {
    worldWidth,
    worldHeight,
    onMoved(bounds) {
      console.log(bounds);
    }
  });

  useEffect(() => {
    if (viewport) {
      viewport.resize(
        app.stage.width,
        app.stage.height,
        worldWidth,
        worldHeight
      );
    }
  }, [app, viewport, worldWidth, worldHeight]);

  return viewport ? children(viewport) : null;
}
