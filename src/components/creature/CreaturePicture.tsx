import React from "react";
import { Creature } from "homm3-parsers";
import { Stage } from "../../pixi/Stage";
import {
  Application,
  Container,
  Loader,
  Sprite,
  AnimatedSprite
} from "pixi.js";
import { creatureConfig } from "./config";

type Props = {
  creature: Creature;
};

function createCreaturePicture(
  app: Application,
  creature: Exclude<Creature, Creature.EMPTY>
) {
  const creatureContainer = new Container();
  creatureContainer.sortableChildren = true;

  const { spritesheet } = Loader.shared.resources[creature] || {
    spritesheet: undefined
  };
  const template = creatureConfig[creature];
  if (spritesheet && template) {
    const { textures: townTextures } = Loader.shared.resources[
      template.faction
    ] || {
      textures: undefined
    };
    if (townTextures) {
      const bg = new Sprite(
        townTextures[`${template.faction}CreatureBackground`]
      );
      bg.zIndex = -100;
      creatureContainer.addChild(bg);
    }
    console.log(spritesheet);
    // 0, 10, 12
    const sprite = new AnimatedSprite(spritesheet.animations[`${creature}_10`]);
    sprite.x = -150;
    sprite.y = -150;
    sprite.animationSpeed = 0.15;
    sprite.play();
    creatureContainer.addChild(sprite);
  }

  app.stage.addChild(creatureContainer);
}

export const CreaturePicture = ({ creature }: Props) => {
  if (creature === Creature.EMPTY) return null;
  return (
    <Stage onCreated={app => createCreaturePicture(app, creature)}>{}</Stage>
  );
};
