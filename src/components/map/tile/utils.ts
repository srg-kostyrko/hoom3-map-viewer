import { TILE_SIZE } from "../MapConst";

export function prepareSpriteProps(mirrorX: boolean, mirrorY: boolean) {
  const position = TILE_SIZE / 2;
  const props = {
    anchorX: 0.5,
    anchorY: 0.5,
    scaleX: 1,
    scaleY: 1,
    x: position,
    y: position
  };

  if (mirrorX) {
    props.scaleX = -1;
  }
  if (mirrorY) {
    props.scaleY = -1;
  }

  return props;
}
