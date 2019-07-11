import { useRef } from "react";
import { Container } from "pixi.js";

export function useContainer() {
  const containerRef = useRef<Container | null>(null);
  let container = containerRef.current;
  if (container === null) {
    container = new Container();
    containerRef.current = container;
  }
  return container;
}
