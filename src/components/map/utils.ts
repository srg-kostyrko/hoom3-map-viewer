import {
  Player,
  Alignment,
  MapObject,
  MetaType,
  Building,
  MapObjectAB,
  MapObjectRoE
} from "homm3-parsers";
import { ColorReplaceFilter } from "pixi-filters";

export const colors = {
  [Player.Red]: 0xff0000,
  [Player.Blue]: 0x3152ff,
  [Player.Tan]: 0x9c7352,
  [Player.Green]: 0x429429,
  [Player.Orange]: 0xff8400,
  [Player.Purple]: 0x8c29a5,
  [Player.Teal]: 0x099ca5,
  [Player.Pink]: 0xc67b8c,
  [Player.Neutral]: 0x848484
};
const textureColor = 0xffff00;

export function getOwnerFilter(owner: Player) {
  if (colors[owner]) {
    return new ColorReplaceFilter(textureColor, colors[owner], 0.4);
  }
  return null;
}

type TownSprite = "fort" | "village" | "capitol";

const townSprites: Record<Alignment, Record<TownSprite, string>> = {
  [Alignment.Castle]: {
    fort: "avccasx0.def",
    village: "avccast0.def",
    capitol: "avccasz0.def"
  },
  [Alignment.Rampart]: {
    fort: "avcramx0.def",
    village: "avcramp0.def",
    capitol: "avcramz0.def"
  },
  [Alignment.Tower]: {
    fort: "avctowx0.def",
    village: "avctowr0.def",
    capitol: "avctowz0.def"
  },
  [Alignment.Inferno]: {
    fort: "avcinfx0.def",
    village: "avcinft0.def",
    capitol: "avcinfz0.def"
  },
  [Alignment.Necropolis]: {
    fort: "avcnecx0.def",
    village: "avcnecr0.def",
    capitol: "avcnecz0.def"
  },
  [Alignment.Dungeon]: {
    fort: "avcdunx0.def",
    village: "avcdung0.def",
    capitol: "avcdunz0.def"
  },
  [Alignment.Stronghold]: {
    fort: "avcstrx0.def",
    village: "avcstro0.def",
    capitol: "avcstrz0.def"
  },
  [Alignment.Fortress]: {
    fort: "avcftrx0.def",
    village: "avcftrt0.def",
    capitol: "avcforz0.def"
  },
  [Alignment.Conflux]: {
    fort: "avchforx.def",
    village: "avchfor0.def",
    capitol: "avchforz.def"
  },
  [Alignment.Random]: {
    fort: "avcranx0.def",
    village: "avcrand0.def",
    capitol: "avcranz0.def"
  }
};

const alignmentHash: { [key: string]: Alignment } = {};
for (const [town, data] of Object.entries(townSprites)) {
  for (const obj of Object.values(data)) {
    alignmentHash[obj] = town as Alignment;
  }
}

export function getAlignmentByHeader(header: string): Alignment {
  return alignmentHash[header.toLowerCase()] || Alignment.Random;
}

export function getTownObjectType(
  object: MapObject | MapObjectAB | MapObjectRoE
): TownSprite {
  if (object.body.type !== MetaType.Town) return "village";
  const { body } = object;
  const { data } = body;
  if (data.buildingsCustomized) {
    if (data.buildings.built.includes(Building.Capitol)) {
      return "capitol";
    }
    if (data.buildings.built.includes(Building.Fort)) {
      return "fort";
    }
  } else if (data.hasFort) {
    return "fort";
  }
  return "village";
}

export function getTownObject(object: MapObject | MapObjectAB | MapObjectRoE) {
  const type = getTownObjectType(object);
  const townType = getAlignmentByHeader(object.attributes.header);
  return townSprites[townType][type];
}
