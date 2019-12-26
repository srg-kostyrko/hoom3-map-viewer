import { Alignment, Creature } from "homm3-parsers";
import { Trait } from "./traits";

export type CreatureConfig = {
  level: number;
  faction: Alignment;
  upgradesTo?: Creature;
  hasDoubleWeek?: boolean;
  graphics: string;
  missileGraphics?: string;
  abilities: Array<Trait>;
};
