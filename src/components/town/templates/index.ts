import { Alignment, Building } from "homm3-parsers";
import { TownTemplate } from "../../../contracts/town";
import { castleTemplate } from "./castle";
import { confluxTemplate } from "./conflux";
import { dungeonTemplate } from "./dungeon";
import { fortressTemplate } from "./fortress";
import { infernoTemplate } from "./inferno";
import { necropolisTemplate } from "./necropolis";
import { rampartTemplate } from "./rampart";
import { strongholdTemplate } from "./stronghold";
import { towerTemplate } from "./tower";

export * from "./castle";
export * from "./conflux";
export * from "./dungeon";
export * from "./fortress";
export * from "./inferno";
export * from "./necropolis";
export * from "./rampart";
export * from "./stronghold";
export * from "./tower";

export const upgradesTree: { [key in Building]?: Building } = {
  [Building.MageGuild1]: Building.MageGuild2,
  [Building.MageGuild2]: Building.MageGuild3,
  [Building.MageGuild3]: Building.MageGuild4,
  [Building.MageGuild4]: Building.MageGuild5,
  [Building.Fort]: Building.Citadel,
  [Building.Citadel]: Building.Castle,
  [Building.VillageHall]: Building.TownHall,
  [Building.TownHall]: Building.CityHall,
  [Building.CityHall]: Building.Capitol,
  [Building.Dwelling1]: Building.DwellingUp1,
  [Building.Dwelling2]: Building.DwellingUp2,
  [Building.Dwelling3]: Building.DwellingUp3,
  [Building.Dwelling4]: Building.DwellingUp4,
  [Building.Dwelling5]: Building.DwellingUp5,
  [Building.Dwelling6]: Building.DwellingUp6,
  [Building.Dwelling7]: Building.DwellingUp7
};

export const townTemplates: Record<Alignment, TownTemplate | null> = {
  [Alignment.Castle]: castleTemplate,
  [Alignment.Conflux]: confluxTemplate,
  [Alignment.Dungeon]: dungeonTemplate,
  [Alignment.Fortress]: fortressTemplate,
  [Alignment.Inferno]: infernoTemplate,
  [Alignment.Necropolis]: necropolisTemplate,
  [Alignment.Rampart]: rampartTemplate,
  [Alignment.Stronghold]: strongholdTemplate,
  [Alignment.Tower]: towerTemplate,
  [Alignment.Random]: null
};
