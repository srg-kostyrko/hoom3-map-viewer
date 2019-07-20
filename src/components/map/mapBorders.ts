// @flow
import { Container, Sprite, Loader } from "pixi.js";
import { range } from "../../utils";
import { TILE_SIZE, BORDER_WIDTH } from "./MapConst";

const BG_SIZE = TILE_SIZE * BORDER_WIDTH;

const generateSprite = (index: number) => ({
  x,
  y
}: {
  x: number;
  y: number;
}) => {
  const spriteName = `edge_${index}.png`;
  const { textures } = Loader.shared.resources.edges;
  if (!textures) return null;
  const sprite = new Sprite(textures[spriteName]);
  sprite.x = x;
  sprite.y = y;
  return sprite;
};

const Bg0 = generateSprite(0);
const Bg1 = generateSprite(1);
const Bg2 = generateSprite(2);
const Bg3 = generateSprite(3);
const Bg4 = generateSprite(4);
const Bg5 = generateSprite(5);
const Bg6 = generateSprite(6);
const Bg7 = generateSprite(7);
const Bg8 = generateSprite(8);
const Bg9 = generateSprite(9);
const Bg10 = generateSprite(10);
const Bg11 = generateSprite(11);
const Bg12 = generateSprite(12);
const Bg13 = generateSprite(13);
const Bg14 = generateSprite(14);
const Bg15 = generateSprite(15);

const Bg = ({ x = 0, y = 0 }: { x?: number; y?: number } = {}) => {
  const container = new Container();
  container.x = x;
  container.y = y;

  const children = [
    Bg0({ x: 0, y: 0 }),
    Bg1({ x: TILE_SIZE, y: 0 }),
    Bg2({ x: TILE_SIZE * 2, y: 0 }),
    Bg3({ x: TILE_SIZE * 3, y: 0 }),
    Bg4({ x: 0, y: TILE_SIZE }),
    Bg5({ x: TILE_SIZE, y: TILE_SIZE }),
    Bg6({ x: TILE_SIZE * 2, y: TILE_SIZE }),
    Bg7({ x: TILE_SIZE * 3, y: TILE_SIZE }),
    Bg8({ x: 0, y: TILE_SIZE * 2 }),
    Bg9({ x: TILE_SIZE, y: TILE_SIZE * 2 }),
    Bg10({ x: TILE_SIZE * 2, y: TILE_SIZE * 2 }),
    Bg11({ x: TILE_SIZE * 3, y: TILE_SIZE * 2 }),
    Bg12({ x: 0, y: TILE_SIZE * 3 }),
    Bg13({ x: TILE_SIZE, y: TILE_SIZE * 3 }),
    Bg14({ x: TILE_SIZE * 2, y: TILE_SIZE * 3 }),
    Bg15({ x: TILE_SIZE * 3, y: TILE_SIZE * 3 })
  ].filter<Sprite>((x: Sprite | null): x is Sprite => x != null);

  container.addChild(...children);

  return container;
};

const TopLeftEdge = generateSprite(16);
const TopRightEdge = generateSprite(17);
const BottomLeftEdge = generateSprite(19);
const BottomRightEdge = generateSprite(18);

const TopBorder = generateSprite(20);
const LeftBorder = generateSprite(32);
const RightBorder = generateSprite(24);
const BottomBorder = generateSprite(28);

const topBorderPosition = (BORDER_WIDTH - 1) * TILE_SIZE;
const leftBorderPosition = (BORDER_WIDTH - 1) * TILE_SIZE;

function calcRightBorderPosition(mapSize: number) {
  return (BORDER_WIDTH + mapSize) * TILE_SIZE;
}

function calcBottomBorderPosition(mapSize: number) {
  return (BORDER_WIDTH + mapSize) * TILE_SIZE;
}

function edges(mapSize: number) {
  const rightBorderPosition = calcRightBorderPosition(mapSize);
  const bottomBorderPosition = calcBottomBorderPosition(mapSize);
  return [
    Bg(),
    Bg({ x: rightBorderPosition }),
    Bg({ y: bottomBorderPosition }),
    Bg({ x: rightBorderPosition, y: bottomBorderPosition }),
    TopLeftEdge({ x: leftBorderPosition, y: topBorderPosition }),
    TopRightEdge({ x: rightBorderPosition, y: topBorderPosition }),
    BottomLeftEdge({ x: leftBorderPosition, y: bottomBorderPosition }),
    BottomRightEdge({
      x: rightBorderPosition,
      y: bottomBorderPosition
    })
  ];
}

function topBorder(mapSize: number) {
  const topBg = range(mapSize / BORDER_WIDTH).map(index => {
    const x = (index + 1) * BG_SIZE;
    return Bg({ x });
  });
  const border = range(mapSize).map(index => {
    const x = (BORDER_WIDTH + index) * TILE_SIZE;
    return TopBorder({ x, y: topBorderPosition });
  });
  return [...topBg, ...border];
}

function bottomBorder(mapSize: number) {
  const bottomBorderPosition = calcBottomBorderPosition(mapSize);
  const bottomBg = range(mapSize / BORDER_WIDTH).map(index => {
    const x = (index + 1) * BG_SIZE;
    return Bg({ x, y: bottomBorderPosition });
  });
  const border = range(mapSize).map(index => {
    const x = (BORDER_WIDTH + index) * TILE_SIZE;
    return BottomBorder({
      x,
      y: bottomBorderPosition
    });
  });
  return [...bottomBg, ...border];
}

function leftBorder(mapSize: number) {
  const leftBg = range(mapSize / BORDER_WIDTH).map(index => {
    const y = (index + 1) * BG_SIZE;
    return Bg({ y });
  });
  const border = range(mapSize).map(index => {
    const y = (BORDER_WIDTH + index) * TILE_SIZE;
    return LeftBorder({ x: leftBorderPosition, y });
  });
  return [...leftBg, ...border];
}

function rightBorder(mapSize: number) {
  const rightBorderPosition = calcRightBorderPosition(mapSize);
  const rightBg = range(mapSize / BORDER_WIDTH).map(index => {
    const y = (index + 1) * BG_SIZE;
    return Bg({ y, x: rightBorderPosition });
  });
  const border = range(mapSize).map(index => {
    const y = (BORDER_WIDTH + index) * TILE_SIZE;
    return RightBorder({
      x: rightBorderPosition,
      y
    });
  });
  return [...rightBg, ...border];
}

function borders(mapSize: number) {
  return [
    ...topBorder(mapSize),
    ...leftBorder(mapSize),
    ...rightBorder(mapSize),
    ...bottomBorder(mapSize)
  ];
}

type Props = {
  mapSize: number;
};

export function createMapBorders({ mapSize }: Props) {
  const container = new Container();
  container.addChild(
    ...edges(mapSize).filter((x): x is Container => x != null)
  );
  container.addChild(
    ...borders(mapSize).filter((x): x is Container => x != null)
  );

  container.cacheAsBitmap = true;
  container.interactive = false;
  container.interactiveChildren = false;

  return container;
}
