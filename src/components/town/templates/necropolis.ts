import { TownTemplate } from "../../../contracts/town";
import { Building, Creature, Artifact, Resource } from "homm3-parsers";

export const necropolisTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 341, y: 116, z: -1 },
      gfx: {
        animation: "TBNCMAGE.def",
        border: "TONMAG1.pcx",
        area: "TZNMAG1.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 341, y: 97, z: -1 },
      gfx: {
        animation: "TBNCMAG2.def",
        border: "TONMAG2.pcx",
        area: "TZNMAG2.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 341, y: 78, z: -1 },
      gfx: {
        animation: "TBNCMAG3.def",
        border: "TONMAG3.pcx",
        area: "TZNMAG3.pcx"
      }
    },
    [Building.MageGuild4]: {
      position: { x: 340, y: 62, z: -1 },
      gfx: {
        animation: "TBNCMAG4.def",
        border: "TONMAG4.pcx",
        area: "TZNMAG4.pcx"
      }
    },
    [Building.MageGuild5]: {
      position: { x: 343, y: 35, z: -1 },
      gfx: {
        animation: "TBNCMAG5.def",
        border: "TONMAG5.pcx",
        area: "TZNMAG5.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 508, y: 189, z: 0 },
      gfx: {
        animation: "TBNCTVRN.def",
        border: "TONTAV.pcx",
        area: "TZNTAV.pcx"
      }
    },
    [Building.Shipyard]: {
      position: { x: 617, y: 265, z: -2 },
      gfx: {
        animation: "TBNCDOCK.def",
        border: "TONSHPBA.pcx",
        area: "TZNSHPBA.pcx"
      }
    },
    [Building.Fort]: {
      position: { x: 138, y: 66, z: 0 },
      gfx: {
        animation: "TBNCCSTL.def",
        border: "TONCAS1.pcx",
        area: "TZNCAS1.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 139, y: 66, z: 0 },
      gfx: {
        animation: "TBNCCAS2.def",
        border: "TONCAS2.pcx",
        area: "TZNCAS2.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 34, y: 18, z: 0 },
      gfx: {
        animation: "TBNCCAS3.def",
        border: "TONCAS3.pcx",
        area: "TZNCAS3.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: 468, y: 76, z: -1 },
      gfx: {
        animation: "TBNCHALL.def",
        border: "TONHAL1.pcx",
        area: "TZNHAL1.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 482, y: 56, z: -1 },
      gfx: {
        animation: "TBNCHAL2.def",
        border: "TONHAL2.pcx",
        area: "TZNHAL2.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 478, y: 26, z: -1 },
      gfx: {
        animation: "TBNCHAL3.def",
        border: "TONHAL3.pcx",
        area: "TZNHAL3.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 481, y: 26, z: -1 },
      gfx: {
        animation: "TBNCHAL4.def",
        border: "TONHAL4.pcx",
        area: "TZNHAL4.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 347, y: 215, z: 2 },
      gfx: {
        animation: "TBNCMARK.def",
        border: "TONMRK1.pcx",
        area: "TZNMRK1.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 276, y: 185, z: 1 },
      gfx: {
        animation: "TBNCSILO.def",
        border: "TONMRK2.pcx",
        area: "TZNMRK2.pcx"
      },
      requires: [Building.Marketplace],
      produce: { [Resource.Ore]: 1, [Resource.Wood]: 1 }
    },
    [Building.Blacksmith]: {
      position: { x: 382, y: 252, z: 4 },
      gfx: {
        animation: "TBNCBLAK.def",
        border: "TONSMITA.pcx",
        area: "TZNSMITA.pcx"
      }
    },
    [Building.Special1]: {
      position: { x: 18, y: 0, z: -1 },
      gfx: {
        animation: "TBNCSPEC.def",
        border: "TONSHRDA.pcx",
        area: "TZNSHRDA.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Horde1]: {
      position: { x: 80, y: 222, z: 4 },
      gfx: {
        animation: "TBNCHRD1.def",
        border: "TONSKE1H.pcx",
        area: "TZNSKE1H.pcx"
      },
      requires: [Building.Dwelling1, Building.Special3]
    },

    [Building.Special2]: {
      position: { x: 307, y: 61, z: -2 },
      gfx: {
        animation: "TBNCEXT0.def",
        border: "TONNECRA.pcx",
        area: "TZNNECRA.pcx"
      },
      requires: [Building.MageGuild1]
    },
    [Building.Special3]: {
      position: { x: 247, y: 275, z: 4 },
      gfx: {
        animation: "TBNCEXT1.def",
        border: "TONSKELT.pcx",
        area: "TZNSKELT.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Grail]: {
      position: { x: 410, y: 88, z: 0 },
      gfx: {
        animation: "TBNCHOLY.def",
        border: "TONHOLYA.pcx",
        area: "TZNHOLYA.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },

    [Building.Dwelling1]: {
      position: { x: 80, y: 222, z: 4 },
      gfx: {
        animation: "TBNCDW_0.def",
        border: "TONSKEL1.pcx",
        area: "TZNSKEL1.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 502, y: 223, z: 0 },
      gfx: {
        animation: "TBNCDW_1.def",
        border: "TONZOMB1.pcx",
        area: "TZNZOMB1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling3]: {
      position: { x: 0, y: 187, z: 2 },
      gfx: {
        animation: "TBNCDW_2.def",
        border: "TONWIGH1.pcx",
        area: "TZNWIGH1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling4]: {
      position: { x: 607, y: 212, z: 2 },
      gfx: {
        animation: "TBNCDW_3.def",
        border: "TONVAM1.pcx",
        area: "TZNVAM1.pcx"
      },
      requires: [Building.Dwelling2]
    },
    [Building.Dwelling5]: {
      position: { x: 206, y: 207, z: 3 },
      gfx: {
        animation: "TBNCDW_4.def",
        border: "TONLICH1.pcx",
        area: "TZNLICH1.pcx"
      },
      requires: [Building.MageGuild1, Building.Dwelling2]
    },
    [Building.Dwelling6]: {
      position: { x: 0, y: 31, z: 0 },
      gfx: {
        animation: "TBNCDW_5.def",
        border: "TONBKN1.pcx",
        area: "TZNBKN1.pcx"
      },
      requires: [Building.Dwelling4, Building.Dwelling5]
    },
    [Building.Dwelling7]: {
      position: { x: 663, y: 25, z: 0 },
      gfx: {
        animation: "TBNCDW_6.def",
        border: "TONBON1.pcx",
        area: "TZNBON1.pcx"
      },
      requires: [Building.Dwelling6]
    },
    [Building.DwellingUp1]: {
      position: { x: 64, y: 222, z: 4 },
      gfx: {
        animation: "TBNCUP_0.def",
        border: "TONSKEL2.pcx",
        area: "TZNSKEL2.pcx"
      }
    },
    [Building.DwellingUp2]: {
      position: { x: 498, y: 224, z: 0 },
      gfx: {
        animation: "TBNCUP_1.def",
        border: "TONZOMB2.pcx",
        area: "TZNZOMB2.pcx"
      }
    },
    [Building.DwellingUp3]: {
      position: { x: 0, y: 179, z: 2 },
      gfx: {
        animation: "TBNCUP_2.def",
        border: "TONWIGH2.pcx",
        area: "TZNWIGH2.pcx"
      }
    },
    [Building.DwellingUp4]: {
      position: { x: 615, y: 193, z: 2 },
      gfx: {
        animation: "TBNCUP_3.def",
        border: "TONVAM2.pcx",
        area: "TZNVAM2.pcx"
      },
      requires: [Building.Special2]
    },
    [Building.DwellingUp5]: {
      position: { x: 222, y: 171, z: 3 },
      gfx: {
        animation: "TBNCUP_4.def",
        border: "TONLICH2.pcx",
        area: "TZNLICH2.pcx"
      }
    },
    [Building.DwellingUp6]: {
      position: { x: 0, y: 30, z: 0 },
      gfx: {
        animation: "TBNCUP_5.def",
        border: "TONBKN2.pcx",
        area: "TZNBKN2.pcx"
      }
    },
    [Building.DwellingUp7]: {
      position: { x: 662, y: 23, z: 0 },
      gfx: {
        animation: "TBNCUP_6.def",
        border: "TONBON2.pcx",
        area: "TZNBON2.pcx"
      }
    },
    [Building.ArtifactMerchants]: null,
    [Building.Special4]: null,
    [Building.Horde2]: null,
    [Building.Horde3]: null,
    [Building.Horde4]: null,
    [Building.Horde5]: null
  },
  animations: [],
  extras: {
    [Building.VillageHall]: {
      position: { x: 25, y: 279, z: 0 },
      gfx: "TBNCEXT2.def"
    },
    [Building.TownHall]: {
      position: { x: 0, y: 241, z: 0 },
      gfx: "TBNCEXT3.def"
    },
    [Building.CityHall]: {
      position: { x: 321, y: 255, z: 0 },
      gfx: "TBNCEXT4.def"
    },
    [Building.Capitol]: {
      position: { x: 475, y: 257, z: 0 },
      gfx: "TBNCEXT5.def"
    }
  },
  upgrades: {
    [Building.Horde1]: {
      position: { x: 64, y: 222, z: 4 },
      gfx: {
        animation: "TBNCHRD2.def",
        border: "TONSKE2H.pcx",
        area: "TZNSKE2H.pcx"
      },
      requires: [Building.DwellingUp1]
    },
    [Building.Shipyard]: {
      position: { x: 617, y: 265, z: -2 },
      gfx: {
        animation: "TBNCBOAT.def",
        border: "TONSHPNA.pcx",
        area: "TZNSHPNA.pcx"
      }
    }
  },
  musicTheme: "music/NecroTown",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBNCBACK.pcx",
  guildWindow: "TPMAGENC.pcx",
  buildingsIcons: "HALLNECR.DEF",
  hallBackground: "TPTHBKNC.pcx",
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
      [Building.Special2],
      [Building.Shipyard]
    ],
    [[Building.Special1], [Building.Special3], [Building.Horde1]],
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
    [Creature.Skeleton, Creature.SkeletonWarrior],
    [Creature.WalkingDead, Creature.Zombie],
    [Creature.Wight, Creature.Wraith],
    [Creature.Vampire, Creature.VampireLord],
    [Creature.Lich, Creature.PowerLich],
    [Creature.BlackKnight, Creature.DreadKnight],
    [Creature.BoneDragon, Creature.GhostDragon]
  ],
  warMachine: Artifact.FirstAidTent,
  creatureBackground: "CRBKGNEC.pcx"
};
