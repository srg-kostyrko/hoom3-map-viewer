// @flow
import { useEffect } from "react";
import { Container, Sprite, Loader } from "pixi.js";
import { range } from "../../utils";
import { usePixiApp } from "../../pixi/hooks/usePixiApp";
import { TILE_SIZE, BORDER_WIDTH } from "./MapConst";

const BG_SIZE = TILE_SIZE * BORDER_WIDTH;

const generateSprite = (index: number) => (
  {
    x,
    y
  }: {
    x: number;
    y: number;
  },
  loader: Loader
) => {
  const spriteName = `edge_${index}.png`;
  const { textures } = loader.resources.edges;
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

const Bg = ({ x = 0, y = 0 }: { x?: number; y?: number }, loader: Loader) => {
  const container = new Container();
  container.x = x;
  container.y = y;

  const children = [
    Bg0({ x: 0, y: 0 }, loader),
    Bg1({ x: TILE_SIZE, y: 0 }, loader),
    Bg2({ x: TILE_SIZE * 2, y: 0 }, loader),
    Bg3({ x: TILE_SIZE * 3, y: 0 }, loader),
    Bg4({ x: 0, y: TILE_SIZE }, loader),
    Bg5({ x: TILE_SIZE, y: TILE_SIZE }, loader),
    Bg6({ x: TILE_SIZE * 2, y: TILE_SIZE }, loader),
    Bg7({ x: TILE_SIZE * 3, y: TILE_SIZE }, loader),
    Bg8({ x: 0, y: TILE_SIZE * 2 }, loader),
    Bg9({ x: TILE_SIZE, y: TILE_SIZE * 2 }, loader),
    Bg10({ x: TILE_SIZE * 2, y: TILE_SIZE * 2 }, loader),
    Bg11({ x: TILE_SIZE * 3, y: TILE_SIZE * 2 }, loader),
    Bg12({ x: 0, y: TILE_SIZE * 3 }, loader),
    Bg13({ x: TILE_SIZE, y: TILE_SIZE * 3 }, loader),
    Bg14({ x: TILE_SIZE * 2, y: TILE_SIZE * 3 }, loader),
    Bg15({ x: TILE_SIZE * 3, y: TILE_SIZE * 3 }, loader)
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

function edges(mapSize: number, loader: Loader) {
  const rightBorderPosition = calcRightBorderPosition(mapSize);
  const bottomBorderPosition = calcBottomBorderPosition(mapSize);
  return [
    Bg({}, loader),
    Bg({ x: rightBorderPosition }, loader),
    Bg({ y: bottomBorderPosition }, loader),
    Bg({ x: rightBorderPosition, y: bottomBorderPosition }, loader),
    TopLeftEdge({ x: leftBorderPosition, y: topBorderPosition }, loader),
    TopRightEdge({ x: rightBorderPosition, y: topBorderPosition }, loader),
    BottomLeftEdge({ x: leftBorderPosition, y: bottomBorderPosition }, loader),
    BottomRightEdge(
      {
        x: rightBorderPosition,
        y: bottomBorderPosition
      },
      loader
    )
  ];
}

function topBorder(mapSize: number, loader: Loader) {
  const topBg = range(mapSize / BORDER_WIDTH).map(index => {
    const x = (index + 1) * BG_SIZE;
    return Bg({ x }, loader);
  });
  const border = range(mapSize).map(index => {
    const x = (BORDER_WIDTH + index) * TILE_SIZE;
    return TopBorder({ x, y: topBorderPosition }, loader);
  });
  return [...topBg, ...border];
}

function bottomBorder(mapSize: number, loader: Loader) {
  const bottomBorderPosition = calcBottomBorderPosition(mapSize);
  const bottomBg = range(mapSize / BORDER_WIDTH).map(index => {
    const x = (index + 1) * BG_SIZE;
    return Bg({ x, y: bottomBorderPosition }, loader);
  });
  const border = range(mapSize).map(index => {
    const x = (BORDER_WIDTH + index) * TILE_SIZE;
    return BottomBorder(
      {
        x,
        y: bottomBorderPosition
      },
      loader
    );
  });
  return [...bottomBg, ...border];
}

function leftBorder(mapSize: number, loader: Loader) {
  const leftBg = range(mapSize / BORDER_WIDTH).map(index => {
    const y = (index + 1) * BG_SIZE;
    return Bg({ y }, loader);
  });
  const border = range(mapSize).map(index => {
    const y = (BORDER_WIDTH + index) * TILE_SIZE;
    return LeftBorder({ x: leftBorderPosition, y }, loader);
  });
  return [...leftBg, ...border];
}

function rightBorder(mapSize: number, loader: Loader) {
  const rightBorderPosition = calcRightBorderPosition(mapSize);
  const rightBg = range(mapSize / BORDER_WIDTH).map(index => {
    const y = (index + 1) * BG_SIZE;
    return Bg({ y, x: rightBorderPosition }, loader);
  });
  const border = range(mapSize).map(index => {
    const y = (BORDER_WIDTH + index) * TILE_SIZE;
    return RightBorder(
      {
        x: rightBorderPosition,
        y
      },
      loader
    );
  });
  return [...rightBg, ...border];
}

function borders(mapSize: number, loader: Loader) {
  return [
    ...topBorder(mapSize, loader),
    ...leftBorder(mapSize, loader),
    ...rightBorder(mapSize, loader),
    ...bottomBorder(mapSize, loader)
  ];
}

type Props = {
  mapSize: number;
  parent: Container;
};

export function MapBorders({ parent, mapSize }: Props) {
  const app = usePixiApp();
  useEffect(() => {
    const container = new Container();
    container.addChild(
      ...edges(mapSize, app.loader).filter((x): x is Container => x != null)
    );
    container.addChild(
      ...borders(mapSize, app.loader).filter((x): x is Container => x != null)
    );

    container.cacheAsBitmap = true;
    container.interactive = false;
    container.interactiveChildren = false;

    parent.addChild(container);

    return () => {
      parent.removeChild(container);
    };
  });
  return null;
}
