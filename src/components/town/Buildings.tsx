import React from "react";
import {
  Application,
  Container,
  Loader,
  Sprite,
  AnimatedSprite
} from "pixi.js";

import { Building, Town, TownRoE, TownAB, Alignment } from "homm3-parsers";
import { Stage } from "../../pixi/Stage";
import { townTemplates, upgradesTree } from "./templates";

type Props = {
  alignment: Alignment;
  town: Town | TownAB | TownRoE;
};

function createBuildings(
  app: Application,
  town: Town | TownAB | TownRoE,
  alignment: Alignment
) {
  const buildingsContainer = new Container();
  buildingsContainer.sortableChildren = true;

  const { textures, spritesheet } = Loader.shared.resources[alignment] || {
    textures: undefined,
    spritesheet: undefined
  };
  const template = townTemplates[alignment];

  if (textures && template && spritesheet) {
    const bg = new Sprite(textures[`${alignment}Background`]);
    bg.zIndex = -100;
    buildingsContainer.addChild(bg);

    for (const [index, animation] of template.animations.entries()) {
      const sprite = new AnimatedSprite(
        spritesheet.animations[`${alignment}extraAnimation${index}`]
      );
      sprite.animationSpeed = 0.15;
      sprite.x = animation.position.x;
      sprite.y = animation.position.y;
      sprite.zIndex = animation.position.z;
      sprite.play();
      buildingsContainer.addChild(sprite);
    }

    let buildings = [Building.VillageHall];

    if (town.buildingsCustomized) {
      buildings = [...buildings, ...town.buildings.built];
    } else if (town.hasFort) {
      buildings.push(Building.Fort);
    }
    for (const building of buildings) {
      const buildingConfig = template.buildings[building];
      if (buildingConfig) {
        const extra = template.extras[building];
        if (extra) {
          const key = `extra${alignment}${building}`;
          let sprite;
          if (spritesheet.animations[key]) {
            sprite = new AnimatedSprite(spritesheet.animations[key]);
            sprite.animationSpeed = 0.15;
          } else {
            sprite = new Sprite(textures[key]);
          }
          sprite.x = extra.position.x;
          sprite.y = extra.position.y;
          sprite.zIndex = extra.position.z;
          buildingsContainer.addChild(sprite);
        }
        const upgradesTo = upgradesTree[building];
        if (upgradesTo && buildings.includes(upgradesTo)) {
          continue;
        }
        const container = new Container();
        container.x = buildingConfig.position.x;
        container.y = buildingConfig.position.y;
        container.zIndex = buildingConfig.position.z;
        container.interactive = true;
        container.buttonMode = true;

        const sprite = new Sprite(textures[`${alignment}${building}`]);
        container.addChild(sprite);

        if (spritesheet.animations[`${alignment}${building}`]) {
          const animation = new AnimatedSprite(
            spritesheet.animations[`${alignment}${building}`]
          );
          animation.animationSpeed = 0.15;
          animation.play();
          container.addChild(animation);
        }

        const border = new Sprite(textures[`${alignment}${building}Border`]);
        border.visible = false;
        container.addChild(border);

        container.on("mouseover", (e: unknown) => {
          border.visible = true;
        });
        container.on("mouseout", () => {
          border.visible = false;
        });

        buildingsContainer.addChild(container);
      }
    }
  }
  app.stage.addChild(buildingsContainer);
}

export const Buildings = ({ town, alignment }: Props) => {
  return (
    <Stage onCreated={app => createBuildings(app, town, alignment)}>{}</Stage>
  );
};
