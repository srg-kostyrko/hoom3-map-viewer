import React from "react";
import { usePixiAppCreator } from "./hooks/usePixiAppCreator";
import { pixiAppContext } from "./hooks/usePixiApp";

export function Stage({ children }: { children: JSX.Element }) {
  const [ref, containerRef, app] = usePixiAppCreator();
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
