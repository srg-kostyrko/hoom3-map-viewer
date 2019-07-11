// @flow
import React from "react";
import { Container as PixiContainer } from "pixi.js";
import { MapObject, MetaType } from "homm3-parsers";

import { TILE_SIZE } from "./MapConst";
import { Sprite } from "../../pixi/Sprite";
import { Container } from "../../pixi/Container";
import { getOwnerFilter, getTownObject } from "./utils";

type ObjectsProps = {
  objects: MapObject[];
  parent: PixiContainer;
  onClick: (object: MapObject) => void;
};
type ObjectProps = {
  object: MapObject;
  parent: PixiContainer;
  onClick: (object: MapObject) => void;
};

const createRenderer = (atlas: string) => ({
  object,
  onClick,
  parent
}: ObjectProps) => {
  const spriteName = object.attribute.header.toLowerCase();
  const { x, y } = object;

  return (
    <Sprite
      key={`${x}_${y}`}
      parent={parent}
      atlas={atlas}
      image={spriteName}
      x={x * TILE_SIZE}
      y={y * TILE_SIZE}
      placeAtBottom
      placeStep={TILE_SIZE}
      interactive
      buttonMode
      onClick={() => onClick(object)}
    />
  );
};

function TownRenderer({ object, parent, onClick }: ObjectProps) {
  if (object.body.type !== MetaType.Town) return null;
  const spriteName = getTownObject(object);
  const { x, y } = object;
  const filters = [];
  const ownerFilter = getOwnerFilter(object.body.data.owner);
  if (ownerFilter) {
    filters.push(ownerFilter);
  }

  return (
    <Sprite
      key={`${x}_${y}`}
      parent={parent}
      atlas="towns"
      image={spriteName}
      x={x * TILE_SIZE}
      y={y * TILE_SIZE}
      placeAtBottom
      placeStep={TILE_SIZE}
      interactive
      buttonMode
      onClick={() => onClick(object)}
      filters={filters}
    />
  );
}

const renderers = {
  [MetaType.Town]: TownRenderer,
  [MetaType.Creature]: createRenderer("monsters"),
  [MetaType.ImpassableTerrain]: createRenderer("impassable_terrain"),
  [MetaType.PassableTerrain]: createRenderer("passable_terrain"),
  [MetaType.ResourceGenerator]: createRenderer("resource"),
  [MetaType.Sign]: createRenderer("visitable"),
  [MetaType.Visitable]: createRenderer("visitable"),
  [MetaType.Boat]: createRenderer("visitable"),
  [MetaType.OceanBottle]: createRenderer("visitable"),
  [MetaType.Treasure]: createRenderer("visitable"),
  [MetaType.AbandonedMine]: createRenderer("resource"),
  [MetaType.Event]: createRenderer("visitable"),
  [MetaType.Garrison]: createRenderer("visitable"),
  [MetaType.Lighthouse]: createRenderer("visitable"),
  [MetaType.Prison]: createRenderer("visitable"),
  [MetaType.QuestGuard]: createRenderer("visitable"),
  [MetaType.Dwelling]: createRenderer("dwelling"),
  [MetaType.RandomDwelling]: createRenderer("dwelling"),
  [MetaType.RandomDwellingAlignment]: createRenderer("dwelling"),
  [MetaType.RandomDwellingLevel]: createRenderer("dwelling"),
  [MetaType.Scholar]: createRenderer("visitable"),
  [MetaType.SeersHut]: createRenderer("visitable"),
  [MetaType.Shipyard]: createRenderer("visitable"),
  [MetaType.Shrine]: createRenderer("visitable"),
  [MetaType.SubterraneanGate]: createRenderer("visitable"),
  [MetaType.WitchHut]: createRenderer("visitable"),
  [MetaType.Artifact]: createRenderer("artifact"),
  [MetaType.Grail]: createRenderer("artifact"),
  [MetaType.PandorasBox]: createRenderer("artifact"),
  [MetaType.SpellScroll]: createRenderer("artifact"),
  [MetaType.Hero]: createRenderer("hero"),
  [MetaType.PlaceholderHero]: createRenderer("hero"),
  [MetaType.RandomHero]: createRenderer("hero"),
  [MetaType.Resource]: createRenderer("resource"),
  [MetaType.MonolithTwoWay]: createRenderer("visitable")
};

export function MapObjects({ objects, parent, onClick }: ObjectsProps) {
  return (
    <Container parent={parent}>
      {container => (
        <>
          {objects.map(object => {
            const Object = renderers[object.body.type];
            return (
              <Object parent={container} object={object} onClick={onClick} />
            );
          })}
        </>
      )}
    </Container>
  );
}
