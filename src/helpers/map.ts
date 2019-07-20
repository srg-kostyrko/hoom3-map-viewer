import {
  H3MFile,
  MapObject,
  MapObjectAB,
  MapObjectRoE,
  MapFormat
} from "homm3-parsers";

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
