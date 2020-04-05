import { Sprite, Filter, Loader } from "pixi.js";
import { OutlineFilter } from "pixi-filters";

type Props = {
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

export function createSprite(props: Props): Sprite {
  let sprite: Sprite | null = null;
  if (props.atlas) {
    const { textures } = Loader.shared.resources[props.atlas] || {
      textures: undefined
    };
    if (textures) {
      sprite = new Sprite(textures[props.image]);
    } else {
      console.error(`Texture atlas ${props.atlas} not found`);
    }
  }
  if (!sprite) {
    sprite = Sprite.from(props.image);
  }
  if (props.placeAtBottom) {
    const placeStep = props.placeStep || 0;
    sprite.x = (props.x || 0) + placeStep - sprite.width;
    sprite.y = (props.y || 0) + placeStep - sprite.height;
    sprite.shader = new OutlineFilter(9, 0xff0000);
  } else {
    sprite.x = props.x || 0;
    sprite.y = props.y || 0;
  }
  sprite.anchor.x = props.anchorX || 0;
  sprite.anchor.y = props.anchorY || 0;
  sprite.scale.x = props.scaleX || 1;
  sprite.scale.y = props.scaleY || 1;

  sprite.interactive = Boolean(props.interactive);
  sprite.buttonMode = Boolean(props.buttonMode);
  if (props.interactive && props.onClick) {
    sprite.on("click", props.onClick);
  }

  if (props.filters && props.filters.length) {
    sprite.filters = props.filters;
  }
  return sprite;
}
