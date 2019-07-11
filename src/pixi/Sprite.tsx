import { Container, Sprite as PixiSprite, Filter } from "pixi.js";
import { useRef } from "react";
import { usePixiApp } from "./hooks/usePixiApp";

type Props = {
  parent: Container;
  image: string;
  atlas?: string;
  x?: number;
  y?: number;
  anchorX?: number;
  anchorY?: number;
  scaleX?: number;
  scaleY?: number;
  placeAtBottom?: boolean;
  placeStep?: number;
  interactive?: boolean;
  buttonMode?: boolean;
  onClick?: Function;
  filters?: Filter[];
};

export function Sprite({
  x = 0,
  y = 0,
  anchorX = 0,
  anchorY = 0,
  scaleX = 1,
  scaleY = 1,
  placeAtBottom = false,
  placeStep = 0,
  interactive = false,
  buttonMode = false,
  atlas,
  image,
  filters,
  onClick,
  parent
}: Props) {
  const app = usePixiApp();
  const spriteRef = useRef<PixiSprite | null>(null);
  let sprite = spriteRef.current;
  if (sprite === null) {
    if (atlas) {
      const { textures } = app.loader.resources[atlas];
      if (textures) {
        sprite = new PixiSprite(textures[image]);
      } else {
        console.error(`Texture atlas ${atlas} not found`);
      }
    }
    if (!sprite) {
      sprite = PixiSprite.from(image);
    }
    if (placeAtBottom) {
      sprite.x = x + placeStep - sprite.width;
      sprite.y = y + placeStep - sprite.height;
    } else {
      sprite.x = x;
      sprite.y = y;
    }
    sprite.anchor.x = anchorX;
    sprite.anchor.y = anchorY;
    sprite.scale.x = scaleX;
    sprite.scale.y = scaleY;

    sprite.interactive = interactive;
    sprite.buttonMode = buttonMode;
    if (interactive && onClick) {
      sprite.on("click", onClick);
    }

    if (filters && filters.length) {
      sprite.filters = filters;
    }

    parent.addChild(sprite);
    spriteRef.current = sprite;
  }
  return null;
}
