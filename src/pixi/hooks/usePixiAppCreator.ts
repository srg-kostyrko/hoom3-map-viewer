import { useRef, useEffect, useState } from "react";
import { Application } from "pixi.js";

export function usePixiAppCreator(): [
  React.RefObject<HTMLCanvasElement>,
  Application | null
] {
  const ref = useRef<HTMLCanvasElement>(null);
  const [app, setApp] = useState<Application | null>(null);

  useEffect(() => {
    console.log("here");
    const viewElement = ref.current;
    const pixiApp = new Application({
      view: viewElement ? viewElement : undefined
    });
    setApp(pixiApp);

    return () => {
      pixiApp.destroy();
    };
  }, []);

  return [ref, app];
}
