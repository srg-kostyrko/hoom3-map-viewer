import { TownTemplate } from "../../../contracts/town";
import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export const rampartTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 454, y: 200, z: -1 },
      gfx: {
        animation: "TBRMMAGE.def",
        border: "TORMAG1.pcx",
        area: "TZRMAG1.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 438, y: 178, z: -1 },
      gfx: {
        animation: "TBRMMAG2.def",
        border: "TORMAG2.pcx",
        area: "TZRMAG2.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 418, y: 153, z: -1 },
      gfx: {
        animation: "TBRMMAG3.def",
        border: "TORMAG3.pcx",
        area: "TZRMAG3.pcx"
      }
    },
    [Building.MageGuild4]: {
      position: { x: 406, y: 129, z: -1 },
      gfx: {
        animation: "TBRMMAG4.def",
        border: "TORMAG4.pcx",
        area: "TZRMAG4.pcx"
      }
    },
    [Building.MageGuild5]: {
      position: { x: 384, y: 104, z: -1 },
      gfx: {
        animation: "TBRMMAG5.def",
        border: "TORMAG5.pcx",
        area: "TZRMAG5.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 181, y: 229, z: 1 },
      gfx: {
        animation: "TBRMTVRN.def",
        border: "TORTAV.pcx",
        area: "TZRTAV.pcx"
      }
    },
    [Building.Fort]: {
      position: { x: 63, y: 25, z: -2 },
      gfx: {
        animation: "TBRMCSTL.def",
        border: "TORCAS1.pcx",
        area: "TZRCAS1.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 79, y: 18, z: -2 },
      gfx: {
        animation: "TBRMCAS2.def",
        border: "TORCAS3.pcx",
        area: "TZRCAS3.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 79, y: 18, z: -2 },
      gfx: {
        animation: "TBRMCAS3.def",
        border: "TORCAS2.pcx",
        area: "TZRCAS2.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: 565, y: 216, z: 0 },
      gfx: {
        animation: "TBRMHALL.def",
        border: "TORHAL1.pcx",
        area: "TZRHAL1.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 538, y: 187, z: 0 },
      gfx: {
        animation: "TBRMHAL2.def",
        border: "TORHAL2.pcx",
        area: "TZRHAL2.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 538, y: 187, z: 0 },
      gfx: {
        animation: "TBRMHAL3.def",
        border: "TORHAL3.pcx",
        area: "TZRHAL3.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 534, y: 187, z: 0 },
      gfx: {
        animation: "TBRMHAL4.def",
        border: "TORHAL4.pcx",
        area: "TZRHAL4.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 129, y: 301, z: 3 },
      gfx: {
        animation: "TBRMMARK.def",
        border: "TORMRK1.pcx",
        area: "TZRMRK1.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 245, y: 324, z: 4 },
      gfx: {
        animation: "TBRMSILO.def",
        border: "TORMRK2.pcx",
        area: "TZRMRK2.pcx"
      },
      requires: [Building.Marketplace],
      produce: { [Resource.Crystal]: 1 }
    },
    [Building.Blacksmith]: {
      position: { x: 558, y: 105, z: -3 },
      gfx: {
        animation: "TBRMBLAK.def",
        border: "TORAID.pcx",
        area: "TZRAID.pcx"
      }
    },
    [Building.Special1]: {
      position: { x: 555, y: 297, z: 0 },
      gfx: {
        animation: "TBRMSPEC.def",
        border: "TORGAR1A.pcx",
        area: "TZRGAR1A.pcx"
      }
    },
    [Building.Horde2]: {
      position: { x: 0, y: 154, z: 0 },
      gfx: {
        animation: "TBRMHRD1.def",
        border: "TORDWF1H.pcx",
        area: "TZRDWF1H.pcx"
      },
      requires: [Building.Dwelling2]
    },

    [Building.Special2]: {
      position: { x: 555, y: 297, z: 2 },
      gfx: {
        animation: "TBRMEXT0.def",
        border: "TORGAR2A.pcx",
        area: "TZRGAR2A.pcx"
      },
      requires: [Building.Special1]
    },
    [Building.Special3]: {
      position: { x: 0, y: 181, z: 1 },
      gfx: {
        animation: "TBRMEXT1.def",
        border: "TORDWFT.pcx",
        area: "TZRDWFT.pcx"
      },
      requires: [Building.Horde2]
    },
    [Building.Horde5]: {
      position: { x: 47, y: 142, z: -1 },
      gfx: {
        animation: "TBRMHRD3.def",
        border: "TORTRE1H.pcx",
        area: "TZRTRE1H.pcx"
      },
      requires: [Building.Dwelling5]
    },

    [Building.Grail]: {
      position: { x: 0, y: 54, z: -1 },
      gfx: {
        animation: "TBRMHOLY.def",
        border: "TORHOLY.pcx",
        area: "TZRHOLY.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },

    [Building.Dwelling1]: {
      position: { x: 0, y: 236, z: 2 },
      gfx: {
        animation: "TBRMDW_0.def",
        border: "TORCEN1A.pcx",
        area: "TZRCEN1A.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 0, y: 154, z: 0 },
      gfx: {
        animation: "TBRMDW_1.def",
        border: "TORDWF1.pcx",
        area: "TZRDWF1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling3]: {
      position: { x: 668, y: 101, z: 0 },
      gfx: {
        animation: "TBRMDW_2.def",
        border: "TORELF1.pcx",
        area: "TZRELF1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling4]: {
      position: { x: 287, y: 73, z: -1 },
      gfx: {
        animation: "TBRMDW_3.def",
        border: "TORPEG1A.pcx",
        area: "TZRPEG1A.pcx"
      },
      requires: [Building.Dwelling3]
    },
    [Building.Dwelling5]: {
      position: { x: 68, y: 146, z: -1 },
      gfx: {
        animation: "TBRMDW_4.def",
        border: "TORTRE1.pcx",
        area: "TZRTRE1.pcx"
      },
      requires: [Building.Dwelling3]
    },
    [Building.Dwelling6]: {
      position: { x: 362, y: 90, z: -2 },
      gfx: {
        animation: "TBRMDW_5.def",
        border: "TORUNI1.pcx",
        area: "TZRUNI1.pcx"
      },
      requires: [Building.Dwelling3, Building.Dwelling4]
    },
    [Building.Dwelling7]: {
      position: { x: 502, y: 27, z: -5 },
      gfx: {
        animation: "TBRMDW_6.def",
        border: "TORDR1AA.pcx",
        area: "TZRDR1AA.pcx"
      },
      requires: [Building.Dwelling6, Building.MageGuild2]
    },
    [Building.DwellingUp1]: {
      position: { x: 0, y: 236, z: 2 },
      gfx: {
        animation: "TBRMUP_0.def",
        border: "TORCEN2A.pcx",
        area: "TZRCEN2A.pcx"
      }
    },
    [Building.DwellingUp2]: {
      position: { x: 0, y: 143, z: 0 },
      gfx: {
        animation: "TBRMUP_1.def",
        border: "TORDWF2.pcx",
        area: "TZRDWF2.pcx"
      }
    },
    [Building.DwellingUp3]: {
      position: { x: 665, y: 101, z: 0 },
      gfx: {
        animation: "TBRMUP_2.def",
        border: "TORELF2.pcx",
        area: "TZRELF2.pcx"
      }
    },
    [Building.DwellingUp4]: {
      position: { x: 287, y: 28, z: -1 },
      gfx: {
        animation: "TBRMUP_3.def",
        border: "TORPEG2A.pcx",
        area: "TZRPEG2A.pcx"
      }
    },
    [Building.DwellingUp5]: {
      position: { x: 63, y: 146, z: -1 },
      gfx: {
        animation: "TBRMUP_4.def",
        border: "TORTRE2.pcx",
        area: "TZRTRE2.pcx"
      }
    },
    [Building.DwellingUp6]: {
      position: { x: 362, y: 90, z: -2 },
      gfx: {
        animation: "TBRMUP_5.def",
        border: "TORUNI2.pcx",
        area: "TZRUNI2.pcx"
      }
    },
    [Building.DwellingUp7]: {
      position: { x: 502, y: 5, z: -5 },
      gfx: {
        animation: "TBRMUP_6.def",
        border: "TORDR2AA.pcx",
        area: "TZRDR2AA.pcx"
      },
      requires: [Building.MageGuild3]
    },
    [Building.ArtifactMerchants]: null,
    [Building.Shipyard]: null,
    [Building.Special4]: null,
    [Building.Horde1]: null,
    [Building.Horde3]: null,
    [Building.Horde4]: null
  },
  animations: [],
  extras: {
    [Building.VillageHall]: {
      position: { x: 327, y: 236, z: 0 },
      gfx: "TBRMEXT2.def"
    },
    [Building.TownHall]: {
      position: { x: 293, y: 235, z: 0 },
      gfx: "TBRMEXT3.def"
    },
    [Building.CityHall]: {
      position: { x: 295, y: 191, z: 0 },
      gfx: "TBRMEXT4.def"
    },
    [Building.Capitol]: {
      position: { x: 260, y: 171, z: 0 },
      gfx: "TBRMEXT5.def"
    }
  },
  upgrades: {
    [Building.Horde2]: {
      position: { x: 0, y: 143, z: 0 },
      gfx: {
        animation: "TBRMHRD2.def",
        border: "TORDWF2H.pcx",
        area: "TZRDWF2H.pcx"
      },
      requires: [Building.DwellingUp2]
    },
    [Building.Horde5]: {
      position: { x: 47, y: 142, z: -1 },
      gfx: {
        animation: "TBRMHRD4.def",
        border: "TORTRE2H.pcx",
        area: "TZRTRE2H.pcx"
      },
      requires: [Building.DwellingUp5]
    }
  },
  musicTheme: "music/Rampart",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBRMBACK.pcx",
  guildWindow: "TPMAGERM.pcx",
  buildingsIcons: "HALLRAMP.DEF",
  hallBackground: "TPTHBKRM.pcx",
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
      [
        Building.MageGuild1,
        Building.MageGuild2,
        Building.MageGuild3,
        Building.MageGuild4,
        Building.MageGuild5
      ],
      [Building.Special1, Building.Special2]
    ],
    [[Building.Special3], [Building.Horde5], [Building.Horde2]],
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
    [Creature.Centaur, Creature.CentaurCaptain],
    [Creature.Dwarf, Creature.BattleDwarf],
    [Creature.WoodElf, Creature.GrandElf],
    [Creature.Pegasus, Creature.SilverPegasus],
    [Creature.DendroidGuard, Creature.DendroidSoldier],
    [Creature.Unicorn, Creature.WarUnicorn],
    [Creature.GreenDragon, Creature.GoldDragon]
  ],
  primaryResource: Resource.Crystal,
  warMachine: Artifact.FirstAidTent,
  creatureBackground: "CRBKGRAM.pcx"
};
