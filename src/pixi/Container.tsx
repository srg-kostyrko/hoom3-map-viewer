import { Container as PixiContainer } from "pixi.js";
import { useRef } from "react";

type Props = {
  x?: number;
  y?: number;
  interactive?: boolean;
  interactiveChildren?: boolean;
  cacheAsBitmap?: boolean;
  parent: PixiContainer;
  children: (parent: PixiContainer) => JSX.Element;
};

export function Container({
  x = 0,
  y = 0,
  interactive = true,
  interactiveChildren = true,
  cacheAsBitmap = false,
  parent,
  children
}: Props) {
  const containerRef = useRef<PixiContainer | null>(null);
  const getContainer = (): PixiContainer => {
    let container = containerRef.current;
    if (container === null) {
      container = new PixiContainer();
      container.x = x;
      container.y = y;
      container.interactive = interactive;
      container.interactiveChildren = interactiveChildren;
      container.cacheAsBitmap = cacheAsBitmap;
      parent.addChild(container);
      containerRef.current = container;
    }
    return container;
  };

  return children(getContainer());
}
