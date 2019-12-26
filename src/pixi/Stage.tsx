import React, { useEffect } from "react";
import useResizeObserver from "use-resize-observer";
import { usePixiAppCreator } from "./hooks/usePixiAppCreator";
import { pixiAppContext } from "./hooks/usePixiApp";
import { Application } from "pixi.js";

export function Stage({
  children,
  onCreated
}: {
  onCreated: (pixiApp: Application) => void;
  children: JSX.Element;
}) {
  const { ref: containerRef, width, height } = useResizeObserver();
  const [ref, app] = usePixiAppCreator();

  useEffect(() => {
    if (app) {
      onCreated(app);
    }
  }, [app, onCreated]);

  useEffect(() => {
    if (app) {
      // app.renderer.resize(width, height);
    }
  }, [app, width, height]);

  return (
    <>
      <div ref={containerRef}>
        <canvas ref={ref} />
      </div>
      {app && (
        <pixiAppContext.Provider value={app}>
          {children}
        </pixiAppContext.Provider>
      )}
    </>
  );
}
