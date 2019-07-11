import { useRef, useEffect, useState } from "react";
import { Application } from "pixi.js";

export function usePixiAppCreator(): [
  React.RefObject<HTMLCanvasElement>,
  React.RefObject<HTMLDivElement>,
  Application | null
] {
  const ref = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [app, setApp] = useState<Application | null>(null);

  useEffect(() => {
    const viewElement = ref.current;
    const pixiApp = new Application({
      view: viewElement ? viewElement : undefined,
      resizeTo: containerRef.current || undefined
    });
    setApp(pixiApp);

    return () => {
      pixiApp.destroy();
    };
  }, []);

  return [ref, containerRef, app];
}
