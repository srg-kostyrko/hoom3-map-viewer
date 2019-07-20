import {
  H3MFile,
  MapObject,
  MapObjectAB,
  MapObjectRoE,
  MapFormat
} from "homm3-parsers";
import { BORDER_WIDTH, TILE_SIZE } from "../components/map/MapConst";
import { ViewportPosition } from "../contracts/map";

export function getLevelObjects(
  map: H3MFile,
  level: number
): MapObject[] | MapObjectAB[] | MapObjectRoE[] {
  if (map.format === MapFormat.ROE) {
    return map.objectDetails.entries.filter(object => object.z === level);
  } else if (map.format === MapFormat.AB) {
    return map.objectDetails.entries.filter(object => object.z === level);
  }
  return map.objectDetails.entries.filter(object => object.z === level);
}

export function calculateMiniMapViewport(
  position: ViewportPosition,
  mapSize: number
): ViewportPosition {
  const borderOffset = BORDER_WIDTH * TILE_SIZE;
  const mapDimensions = mapSize * TILE_SIZE;

  const x = Math.max(position.x - borderOffset, 0);
  const y = Math.max(position.y - borderOffset, 0);

  const widthDelta =
    Math.max(borderOffset - position.x, 0) +
    Math.max(position.x + position.width - (borderOffset + mapDimensions), 0);
  const heightDelta =
    Math.max(borderOffset - position.y, 0) +
    Math.max(position.y + position.height - (borderOffset + mapDimensions), 0);

  return {
    x,
    y,
    width: position.width - widthDelta,
    height: position.height - heightDelta
  };
}
