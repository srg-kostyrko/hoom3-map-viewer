import { Container } from "pixi.js";
import { MapObject, MetaType, MapObjectAB, MapObjectRoE } from "homm3-parsers";

import { TILE_SIZE } from "./MapConst";
import { createSprite } from "../../pixi/creators/sprite";
import { getOwnerFilter, getTownObject } from "./utils";

type MapObj = MapObject | MapObjectAB | MapObjectRoE;
type OnClickCallback = (object: MapObj) => void;

const createRenderer = (atlas: string, interactive: boolean) => (
  object: MapObj,
  onClick: OnClickCallback
) => {
  const spriteName = object.attributes.header.toLowerCase();
  const { x, y } = object;

  return createSprite({
    atlas,
    image: spriteName,
    x: x * TILE_SIZE,
    y: y * TILE_SIZE,
    placeAtBottom: true,
    placeStep: TILE_SIZE,
    interactive: interactive,
    buttonMode: interactive,
    onClick() {
      onClick(object);
    }
  });
};

function townRenderer(object: MapObj, onClick: OnClickCallback) {
  if (object.body.type !== MetaType.Town) return null;
  const spriteName = getTownObject(object);
  const { x, y } = object;
  const filters = [];
  const ownerFilter = getOwnerFilter(object.body.data.owner);
  if (ownerFilter) {
    filters.push(ownerFilter);
  }

  return createSprite({
    atlas: "towns",
    image: spriteName,
    x: x * TILE_SIZE,
    y: y * TILE_SIZE,
    placeAtBottom: true,
    placeStep: TILE_SIZE,
    interactive: true,
    buttonMode: true,
    onClick() {
      onClick(object);
    },
    filters
  });
}

const renderers = {
  [MetaType.Town]: townRenderer,
  [MetaType.Creature]: createRenderer("monsters", true),
  [MetaType.ImpassableTerrain]: createRenderer("impassable_terrain", false),
  [MetaType.PassableTerrain]: createRenderer("passable_terrain", false),
  [MetaType.ResourceGenerator]: createRenderer("resource", true),
  [MetaType.Sign]: createRenderer("visitable", true),
  [MetaType.Visitable]: createRenderer("visitable", true),
  [MetaType.Boat]: createRenderer("visitable", true),
  [MetaType.OceanBottle]: createRenderer("visitable", true),
  [MetaType.Treasure]: createRenderer("visitable", true),
  [MetaType.AbandonedMine]: createRenderer("resource", true),
  [MetaType.Event]: createRenderer("visitable", true),
  [MetaType.Garrison]: createRenderer("visitable", true),
  [MetaType.Lighthouse]: createRenderer("visitable", true),
  [MetaType.Prison]: createRenderer("visitable", true),
  [MetaType.QuestGuard]: createRenderer("visitable", true),
  [MetaType.Dwelling]: createRenderer("dwelling", true),
  [MetaType.RandomDwelling]: createRenderer("dwelling", true),
  [MetaType.RandomDwellingAlignment]: createRenderer("dwelling", true),
  [MetaType.RandomDwellingLevel]: createRenderer("dwelling", true),
  [MetaType.Scholar]: createRenderer("visitable", true),
  [MetaType.SeersHut]: createRenderer("visitable", true),
  [MetaType.Shipyard]: createRenderer("visitable", true),
  [MetaType.Shrine]: createRenderer("visitable", true),
  [MetaType.SubterraneanGate]: createRenderer("visitable", true),
  [MetaType.WitchHut]: createRenderer("visitable", true),
  [MetaType.Artifact]: createRenderer("artifact", true),
  [MetaType.Grail]: createRenderer("artifact", true),
  [MetaType.PandorasBox]: createRenderer("artifact", true),
  [MetaType.SpellScroll]: createRenderer("artifact", true),
  [MetaType.Hero]: createRenderer("hero", true),
  [MetaType.PlaceholderHero]: createRenderer("hero", true),
  [MetaType.RandomHero]: createRenderer("hero", true),
  [MetaType.Resource]: createRenderer("resource", true),
  [MetaType.MonolithTwoWay]: createRenderer("visitable", true)
};

export function createMapObjects(objects: MapObj[], onClick: OnClickCallback) {
  const layer = new Container();
  for (const object of objects) {
    const renderer = renderers[object.body.type];
    if (renderer) {
      const sprite = renderer(object, onClick);
      if (sprite) {
        layer.addChild(sprite);
      }
    }
  }
  return layer;
}
