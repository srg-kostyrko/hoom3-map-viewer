import { TownTemplate } from "../../../contracts/town";
import { Building, Creature, Artifact, Resource } from "homm3-parsers";

export const fortressTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 0, y: 200, z: -1 },
      gfx: {
        animation: "TBFRMAGE.def",
        border: "TOFMAG1A.pcx",
        area: "TZFMAG1A.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 0, y: 177, z: -1 },
      gfx: {
        animation: "TBFRMAG2.def",
        border: "TOFMAG2A.pcx",
        area: "TZFMAG2A.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 0, y: 135, z: -1 },
      gfx: {
        animation: "TBFRMAG3.def",
        border: "TOFMAG3A.pcx",
        area: "TZFMAG3A.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 634, y: 219, z: 3 },
      gfx: {
        animation: "TBFRTVRN.def",
        border: "TOFTAVA.pcx",
        area: "TZFTAVA.pcx"
      }
    },
    [Building.Shipyard]: {
      position: { x: 197, y: 294, z: 0 },
      gfx: {
        animation: "TBFRDOCK.def",
        border: "TOFDCK2.pcx",
        area: "TZFDCK2.pcx"
      }
    },
    [Building.Fort]: {
      position: { x: 368, y: 118, z: -1 },
      gfx: {
        animation: "TBFRCSTL.def",
        border: "TOFCAS1.pcx",
        area: "TZFCAS1.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 368, y: 98, z: -1 },
      gfx: {
        animation: "TBFRCAS2.def",
        border: "TOFCAS2.pcx",
        area: "TZFCAS2.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 368, y: 55, z: -1 },
      gfx: {
        animation: "TBFRCAS3.def",
        border: "TOFCAS3.pcx",
        area: "TZFCAS3.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: 166, y: 128, z: 1 },
      gfx: {
        animation: "TBFRHALL.def",
        border: "TOFHAL1.pcx",
        area: "TZFHAL1.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 166, y: 97, z: 1 },
      gfx: {
        animation: "TBFRHAL2.def",
        border: "TOFHAL2.pcx",
        area: "TZFHAL2.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 166, y: 51, z: 1 },
      gfx: {
        animation: "TBFRHAL3.def",
        border: "TOFHAL3.pcx",
        area: "TZFHAL3.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 166, y: 2, z: 1 },
      gfx: {
        animation: "TBFRHAL4.def",
        border: "TOFHAL4.pcx",
        area: "TZFHAL4.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 382, y: 219, z: 4 },
      gfx: {
        animation: "TBFRMARK.def",
        border: "TOFMRKAA.pcx",
        area: "TZFMRKAA.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 448, y: 210, z: 2 },
      gfx: {
        animation: "TBFRSILO.def",
        border: "TOFMRK2A.pcx",
        area: "TZFMRK2A.pcx"
      },
      requires: [Building.Marketplace],
      produce: { [Resource.Wood]: 1, [Resource.Ore]: 1 }
    },
    [Building.Blacksmith]: {
      position: { x: 360, y: 160, z: 0 },
      gfx: {
        animation: "TBFRBLAK.def",
        border: "TOFAIDA.pcx",
        area: "TZFAIDA.pcx"
      }
    },
    [Building.Special1]: {
      position: { x: 703, y: 36, z: 0 },
      gfx: {
        animation: "TBFRSPEC.def",
        border: "TOFCAGE.pcx",
        area: "TZFCAGE.pcx"
      },
      requires: [Building.TownHall, Building.Special2]
    },
    [Building.Horde1]: {
      position: { x: 641, y: 121, z: 1 },
      gfx: {
        animation: "TBFRHRD1.def",
        border: "TOFGNL1H.pcx",
        area: "TZFGNL1H.pcx"
      },
      requires: [Building.Dwelling1]
    },

    [Building.Special2]: {
      position: { x: 341, y: 174, z: 0 },
      gfx: {
        animation: "TBFREXT0.def",
        border: "TOFCASD.pcx",
        area: "TZFCASD.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Special3]: {
      position: { x: 349, y: 79, z: -2 },
      gfx: {
        animation: "TBFREXT1.def",
        border: "TOFCASA.pcx",
        area: "TZFCASA.pcx"
      },
      requires: [Building.Special2]
    },
    [Building.Grail]: {
      position: { x: 468, y: 260, z: 5 },
      gfx: {
        animation: "TBFRHOLY.def",
        border: "TOFHLYAA.pcx",
        area: "TZFHLYAA.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },
    [Building.Dwelling1]: {
      position: { x: 641, y: 168, z: 1 },
      gfx: {
        animation: "TBFRDW_0.def",
        border: "TOFGNL1.pcx",
        area: "TZFGNL1.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 141, y: 178, z: 0 },
      gfx: {
        animation: "TBFRDW_1.def",
        border: "TOFLIZ1.pcx",
        area: "TZFLIZ1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling3]: {
      position: { x: 192, y: 85, z: 0 },
      gfx: {
        animation: "TBFRDW_3.def",
        border: "TOFFLY1A.pcx",
        area: "TZFFLY1A.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling4]: {
      position: { x: 0, y: 292, z: 0 },
      gfx: {
        animation: "TBFRDW_4.def",
        border: "TOFBAS1.pcx",
        area: "TZFBAS1.pcx"
      },
      requires: [Building.Dwelling3]
    },
    [Building.Dwelling5]: {
      position: { x: 15, y: 127, z: -2 },
      gfx: {
        animation: "TBFRDW_2.def",
        border: "TOFGOR1.pcx",
        area: "TZFGOR1.pcx"
      },
      requires: [Building.Dwelling2, Building.Dwelling3]
    },
    [Building.Dwelling6]: {
      position: { x: 0, y: 4, z: 0 },
      gfx: {
        animation: "TBFRDW_5.def",
        border: "TOFWYV1.pcx",
        area: "TZFWYV1.pcx"
      },
      requires: [Building.Dwelling2]
    },
    [Building.Dwelling7]: {
      position: { x: 612, y: 291, z: 5 },
      gfx: {
        animation: "TBFRDW_6.def",
        border: "TOFHYD1A.pcx",
        area: "TZFHYD1A.pcx"
      },
      requires: [Building.Dwelling4, Building.Dwelling6]
    },
    [Building.DwellingUp1]: {
      position: { x: 641, y: 107, z: 1 },
      gfx: {
        animation: "TBFRUP_0.def",
        border: "TOFGNL2.pcx",
        area: "TZFGNL2.pcx"
      },
      requires: [Building.Tavern]
    },
    [Building.DwellingUp2]: {
      position: { x: 125, y: 163, z: 0 },
      gfx: {
        animation: "TBFRUP_1.def",
        border: "TOFLIZ2.pcx",
        area: "TZFLIZ2.pcx"
      }
    },
    [Building.DwellingUp3]: {
      position: { x: 159, y: 19, z: 0 },
      gfx: {
        animation: "TBFRUP_3.def",
        border: "TOFFLY2A.pcx",
        area: "TZFFLY2A.pcx"
      }
    },
    [Building.DwellingUp4]: {
      position: { x: 0, y: 257, z: 0 },
      gfx: {
        animation: "TBFRUP_4.def",
        border: "TOFBAS2.pcx",
        area: "TZFBAS2.pcx"
      }
    },
    [Building.DwellingUp5]: {
      position: { x: 15, y: 69, z: -2 },
      gfx: {
        animation: "TBFRUP_2.def",
        border: "TOFGOR2.pcx",
        area: "TZFGOR2.pcx"
      },
      requires: [Building.ResourceSilo]
    },
    [Building.DwellingUp6]: {
      position: { x: 0, y: 4, z: 0 },
      gfx: {
        animation: "TBFRUP_5.def",
        border: "TOFWYV2.pcx",
        area: "TZFWYV2.pcx"
      }
    },
    [Building.DwellingUp7]: {
      position: { x: 587, y: 263, z: 5 },
      gfx: {
        animation: "TBFRUP_6.def",
        border: "TOFHYD2A.pcx",
        area: "TZFHYD2A.pcx"
      }
    },
    [Building.ArtifactMerchants]: null,
    [Building.MageGuild4]: null,
    [Building.MageGuild5]: null,
    [Building.Special4]: null,
    [Building.Horde2]: null,
    [Building.Horde3]: null,
    [Building.Horde4]: null,
    [Building.Horde5]: null
  },
  animations: [
    {
      position: { x: 372, y: 227, z: 0 },
      gfx: "TBFREXT2.def"
    }
  ],
  extras: {
    [Building.Capitol]: {
      position: { x: 320, y: 141, z: 0 },
      gfx: "TBFRWTRW.def"
    }
  },
  upgrades: {
    [Building.Horde1]: {
      position: { x: 641, y: 68, z: 1 },
      gfx: {
        animation: "TBFRHRD2.def",
        border: "TOFGNL2H.pcx",
        area: "TZFGNL2H.pcx"
      },
      requires: [Building.DwellingUp1]
    },
    [Building.Shipyard]: {
      position: { x: 197, y: 294, z: 1 },
      gfx: {
        animation: "TBFRBOAT.def",
        border: "TOFDCK1.pcx",
        area: "TZFDCK1.pcx"
      }
    }
  },
  musicTheme: "music/FortressTown",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBFRBACK.pcx",
  guildWindow: "TPMAGEFR.pcx",
  buildingsIcons: "HALLFORT.DEF",
  hallBackground: "TPTHBKFR.pcx",
  hallSlots: [
    [
      [
        Building.VillageHall,
        Building.TownHall,
        Building.CityHall,
        Building.Capitol
      ],
      [Building.Fort, Building.Citadel, Building.Castle],
      [Building.Tavern],
      [Building.Blacksmith]
    ],
    [
      [Building.Marketplace, Building.ResourceSilo],
      [Building.MageGuild1, Building.MageGuild2, Building.MageGuild3],
      [Building.Shipyard]
    ],
    [
      [Building.Special1],
      [Building.Special2, Building.Special3],
      [Building.Horde1]
    ],
    [
      [Building.Dwelling1, Building.DwellingUp1],
      [Building.Dwelling2, Building.DwellingUp2],
      [Building.Dwelling3, Building.DwellingUp3],
      [Building.Dwelling4, Building.DwellingUp4]
    ],
    [
      [Building.Dwelling5, Building.DwellingUp5],
      [Building.Dwelling6, Building.DwellingUp6],
      [Building.Dwelling7, Building.DwellingUp7]
    ]
  ],
  creatures: [
    [Creature.Gnoll, Creature.GnollMarauder],
    [Creature.Lizardman, Creature.LizardWarrior],
    [Creature.SerpentFly, Creature.DragonFly],
    [Creature.Basilisk, Creature.GreaterBasilisk],
    [Creature.Gorgon, Creature.MightyGorgon],
    [Creature.Wyvern, Creature.WyvernMonarch],
    [Creature.Hydra, Creature.ChaosHydra]
  ],
  warMachine: Artifact.FirstAidTent,
  creatureBackground: "CRBKGFOR.pcx"
};
