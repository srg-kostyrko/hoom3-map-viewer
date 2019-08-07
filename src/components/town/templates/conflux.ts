import { TownTemplate } from "../../../contracts/town";
import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export const confluxTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 206, y: 58, z: 4 },
      gfx: {
        animation: "TBELMAGE.def",
        border: "TOELMAGE.pcx",
        area: "TZELMAGE.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 206, y: 58, z: 4 },
      gfx: {
        animation: "TBELMAG2.def",
        border: "TOELMAG2.pcx",
        area: "TZELMAG2.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 206, y: 58, z: 4 },
      gfx: {
        animation: "TBELMAG3.def",
        border: "TOELMAG3.pcx",
        area: "TZELMAG3.pcx"
      }
    },
    [Building.MageGuild4]: {
      position: { x: 206, y: 58, z: 4 },
      gfx: {
        animation: "TBELMAG4.def",
        border: "TOELMAG4.pcx",
        area: "TZELMAG4.pcx"
      }
    },
    [Building.MageGuild5]: {
      position: { x: 206, y: 58, z: 4 },
      gfx: {
        animation: "TBELMAG5.def",
        border: "TOELMAG5.pcx",
        area: "TZELMAG5.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 553, y: 203, z: 1 },
      gfx: {
        animation: "TBELTVRN.def",
        border: "TOELTVRN.pcx",
        area: "TZELTVRN.pcx"
      }
    },
    [Building.Shipyard]: {
      position: { x: 239, y: 215, z: 2 },
      gfx: {
        animation: "TBELDOCK.def",
        border: "TOELDOCK.pcx",
        area: "TZELDOCK.pcx"
      }
    },
    [Building.Fort]: {
      position: { x: 349, y: 101, z: -1 },
      gfx: {
        animation: "TBELCSTL.def",
        border: "TOELCSTL.pcx",
        area: "TZELCSTL.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 349, y: 101, z: -1 },
      gfx: {
        animation: "TBELCAS2.def",
        border: "TOELCAS2.pcx",
        area: "TZELCAS2.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 349, y: 101, z: -1 },
      gfx: {
        animation: "TBELCAS3.def",
        border: "TOELCAS3.pcx",
        area: "TZELCAS3.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: -1, y: 164, z: 5 },
      gfx: {
        animation: "TBELHALL.def",
        border: "TOELHALL.pcx",
        area: "TZELHALL.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 0, y: 165, z: 5 },
      gfx: {
        animation: "TBELHAL2.def",
        border: "TOELHAL2.pcx",
        area: "TZELHAL2.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 0, y: 165, z: 5 },
      gfx: {
        animation: "TBELHAL3.def",
        border: "TOELHAL3.pcx",
        area: "TZELHAL3.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 0, y: 164, z: 5 },
      gfx: {
        animation: "TBELHAL4.def",
        border: "TOELHAL4.pcx",
        area: "TZELHAL4.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 347, y: 216, z: 4 },
      gfx: {
        animation: "TBELMARK.def",
        border: "TOELMARK.pcx",
        area: "TZELMARK.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 372, y: 171, z: 2 },
      gfx: {
        animation: "TBELSILO.def",
        border: "TOELSILO.pcx",
        area: "TZELSILO.pcx"
      },
      requires: [Building.Marketplace],
      produce: { [Resource.Mercury]: 1 }
    },
    [Building.Blacksmith]: {
      position: { x: 449, y: 151, z: 1 },
      gfx: {
        animation: "TBELBLAK.def",
        border: "TOELBLAK.pcx",
        area: "TZELBLAK.pcx"
      }
    },
    [Building.Special1]: {
      position: { x: 284, y: 246, z: 4 },
      gfx: {
        animation: "TBELSPEC.def",
        border: "TOELSPEC.pcx",
        area: "TZELSPEC.pcx"
      },
      requires: [Building.Marketplace]
    },
    [Building.Horde1]: {
      position: { x: 689, y: 250, z: 0 },
      gfx: {
        animation: "TBELHRD1.def",
        border: "TOELHRD1.pcx",
        area: "TZELHRD1.pcx"
      },
      requires: [Building.Dwelling1]
    },

    [Building.Special2]: {
      position: { x: 104, y: 170, z: 3 },
      gfx: {
        animation: "TBELEXT6.def",
        border: "TOELEXT6.pcx",
        area: "TZELEXT6.pcx"
      },
      requires: [Building.MageGuild1]
    },
    [Building.Grail]: {
      position: { x: 307, y: 2, z: 0 },
      gfx: {
        animation: "TBELHOLY.def",
        border: "TOELHOLY.pcx",
        area: "TZELHOLY.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },

    [Building.Dwelling1]: {
      position: { x: 689, y: 250, z: 0 },
      gfx: {
        animation: "TBELDW_0.def",
        border: "TOELDW_0.pcx",
        area: "TZELDW_0.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 630, y: 50, z: 0 },
      gfx: {
        animation: "TBELDW_1.def",
        border: "TOELDW_1.pcx",
        area: "TZELDW_1.pcx"
      },
      requires: [Building.Dwelling1, Building.MageGuild1]
    },
    [Building.Dwelling3]: {
      position: { x: 709, y: 210, z: -1 },
      gfx: {
        animation: "TBELDW_2.def",
        border: "TOELDW_2.pcx",
        area: "TZELDW_2.pcx"
      },
      requires: [Building.Dwelling1, Building.MageGuild1]
    },
    [Building.Dwelling4]: {
      position: { x: 108, y: 131, z: -1 },
      gfx: {
        animation: "TBELDW_3.def",
        border: "TOELDW_3.pcx",
        area: "TZELDW_3.pcx"
      },
      requires: [Building.Dwelling2]
    },
    [Building.Dwelling5]: {
      position: { x: 264, y: 168, z: -1 },
      gfx: {
        animation: "TBELDW_4.def",
        border: "TOELDW_4.pcx",
        area: "TZELDW_4.pcx"
      },
      requires: [Building.Dwelling3]
    },
    [Building.Dwelling6]: {
      position: { x: 394, y: 283, z: 2 },
      gfx: {
        animation: "TBELDW_5.def",
        border: "TOELDW_5.pcx",
        area: "TZELDW_5.pcx"
      },
      requires: [Building.Dwelling4, Building.Dwelling5]
    },
    [Building.Dwelling7]: {
      position: { x: 43, y: 16, z: -2 },
      gfx: {
        animation: "TBELDW_6.def",
        border: "TOELDW_6.pcx",
        area: "TZELDW_6.pcx"
      },
      requires: [Building.Dwelling6]
    },
    [Building.DwellingUp1]: {
      position: { x: 689, y: 250, z: 0 },
      gfx: {
        animation: "TBELUP_0.def",
        border: "TOELUP_0.pcx",
        area: "TZELUP_0.pcx"
      }
    },
    [Building.DwellingUp2]: {
      position: { x: 630, y: 50, z: 0 },
      gfx: {
        animation: "TBELUP_1.def",
        border: "TOELUP_1.pcx",
        area: "TZELUP_1.pcx"
      }
    },
    [Building.DwellingUp3]: {
      position: { x: 709, y: 210, z: -1 },
      gfx: {
        animation: "TBELUP_2.def",
        border: "TOELUP_2.pcx",
        area: "TZELUP_2.pcx"
      }
    },
    [Building.DwellingUp4]: {
      position: { x: 108, y: 131, z: -1 },
      gfx: {
        animation: "TBELUP_3.def",
        border: "TOELUP_3.pcx",
        area: "TZELUP_3.pcx"
      },
      requires: [Building.Dwelling2]
    },
    [Building.DwellingUp5]: {
      position: { x: 264, y: 168, z: -1 },
      gfx: {
        animation: "TBELUP_4.def",
        border: "TOELUP_4.pcx",
        area: "TZELUP_4.pcx"
      }
    },
    [Building.DwellingUp6]: {
      position: { x: 394, y: 283, z: 2 },
      gfx: {
        animation: "TBELUP_5.def",
        border: "TOELUP_5.pcx",
        area: "TZELUP_5.pcx"
      },
      requires: [Building.MageGuild2]
    },
    [Building.DwellingUp7]: {
      position: { x: 43, y: 0, z: -2 },
      gfx: {
        animation: "TBELUP_6.def",
        border: "TOELUP_6.pcx",
        area: "TZELUP_6.pcx"
      }
    },
    [Building.ArtifactMerchants]: null,
    [Building.Special3]: null,
    [Building.Special4]: null,
    [Building.Horde2]: null,
    [Building.Horde3]: null,
    [Building.Horde4]: null,
    [Building.Horde5]: null
  },
  animations: [
    {
      position: { x: 682, y: 183, z: -1 },
      gfx: "TBELEXT5.def"
    }
  ],
  extras: {
    [Building.VillageHall]: {
      position: { x: 23, y: 218, z: 0 },
      gfx: "TBELEXT1.def"
    },
    [Building.TownHall]: {
      position: { x: 232, y: 205, z: 0 },
      gfx: "TBELEXT2.def"
    },
    [Building.CityHall]: {
      position: { x: 516, y: 223, z: 1 },
      gfx: "TBELEXT3.def"
    },
    [Building.Capitol]: {
      position: { x: 0, y: 252, z: 6 },
      gfx: "TBELEXT4.def"
    }
  },
  upgrades: {
    [Building.Horde1]: {
      position: { x: 689, y: 250, z: 0 },
      gfx: {
        animation: "TBELHRD2.def",
        border: "TOELHRD2.pcx",
        area: "TZELHRD2.pcx"
      },
      requires: [Building.DwellingUp1]
    },
    [Building.Shipyard]: {
      position: { x: 239, y: 215, z: 2 },
      gfx: {
        animation: "TBELBOAT.def",
        border: "TOELBOAT.pcx",
        area: "TZELBOAT.pcx"
      }
    }
  },
  musicTheme: "music/ElemTown",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBELBACK.pcx",
  guildWindow: "TPMAGEEL.pcx",
  buildingsIcons: "HALLELEM.DEF",
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
      [
        Building.MageGuild1,
        Building.MageGuild2,
        Building.MageGuild3,
        Building.MageGuild4,
        Building.MageGuild5
      ],
      [Building.Shipyard]
    ],
    [[Building.Special2], [Building.Special1], [Building.Horde1]],
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
    [Creature.Pixie, Creature.Sprite],
    [Creature.AirElemental, Creature.StormElemental],
    [Creature.WaterElemental, Creature.IceElemental],
    [Creature.FireElemental, Creature.EnergyElemental],
    [Creature.EarthElemental, Creature.MagmaElemental],
    [Creature.PsychicElemental, Creature.MagicElemental],
    [Creature.Firebird, Creature.Phoenix]
  ],
  primaryResource: Resource.Mercury,
  warMachine: Artifact.Ballista,
  creatureBackground: "CRBKGELE.pcx"
};
