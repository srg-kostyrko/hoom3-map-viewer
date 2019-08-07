import { Building, Resource, Creature, Artifact } from "homm3-parsers";

interface Position {
  x: number;
  y: number;
  z: number;
}

export interface TownTemplate {
  buildings: Record<
    Building,
    {
      position: Position;
      gfx: {
        animation: string;
        border: string;
        area: string;
        noAnimation?: boolean;
      };
      produce?: { [key in Resource]?: number };
      requires?: Building[];
    } | null
  >;
  animations: {
    position: Position;
    gfx: string;
  }[];
  extras: {
    [building in Building]?: {
      position: Position;
      gfx: string;
    }
  };
  upgrades: {
    [building in Building]?: {
      position: Position;
      gfx: {
        animation: string;
        border: string;
        area: string;
        noAnimation?: boolean;
      };
      requires?: Building[];
    }
  };
  musicTheme: string;
  townBackground: string;
  guildBackground: string;
  guildWindow: string;
  buildingsIcons: string;
  hallBackground: string;
  hallSlots: Building[][][];
  creatures: [Creature, Creature][];
  warMachine: Artifact;
  primaryResource?: Resource;
  creatureBackground: string;
}
