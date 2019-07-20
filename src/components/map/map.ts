import { createLevel } from "./level";
import { createMapBorders } from "./mapBorders";
import { MapData } from "../../contracts/app";
import { Container } from "pixi.js";
import { MapObjectAB, MapObject, MapObjectRoE } from "homm3-parsers";

export const createMap = (
  map: MapData,
  onObjectClick: (object: MapObject | MapObjectAB | MapObjectRoE) => void
) => {
  const { mapSize, levels } = map;

  const mapContainer = new Container();
  const groundLevel = createLevel({
    mapSize,

    objects: levels.ground.objects,
    tiles: levels.ground.tiles,
    navMesh: levels.ground.navmesh,
    onClick: onObjectClick
  });
  const subLevel = levels.sub
    ? createLevel({
        mapSize,

        objects: levels.sub.objects,
        tiles: levels.sub.tiles,
        navMesh: levels.sub.navmesh,
        onClick: onObjectClick
      })
    : null;

  const borders = createMapBorders({ mapSize });

  mapContainer.addChild(groundLevel.level);
  if (subLevel) {
    mapContainer.addChild(subLevel.level);
    subLevel.level.visible = false;
  }
  mapContainer.addChild(borders);

  return {
    mapContainer,
    ground: groundLevel,
    sub: subLevel
  };
};
