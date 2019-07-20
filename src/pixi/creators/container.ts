import { Container } from "pixi.js";

type Props = {
  x?: number;
  y?: number;
  interactive?: boolean;
  interactiveChildren?: boolean;
  cacheAsBitmap?: boolean;
};

export function createContainer({
  x = 0,
  y = 0,
  interactive = true,
  interactiveChildren = true,
  cacheAsBitmap = false
}: Props) {
  const container = new Container();
  container.x = x;
  container.y = y;
  container.interactive = interactive;
  container.interactiveChildren = interactiveChildren;
  container.cacheAsBitmap = cacheAsBitmap;
  return container;
}
