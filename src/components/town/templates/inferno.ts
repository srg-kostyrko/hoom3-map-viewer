import { TownTemplate } from "../../../contracts/town";
import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export const infernoTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 667, y: 127, z: 0 },
      gfx: {
        animation: "TBINMAGE.def",
        border: "TOIMAG1A.pcx",
        area: "TZIMAG1A.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 667, y: 101, z: 0 },
      gfx: {
        animation: "TBINMAG2.def",
        border: "TOIMAG2A.pcx",
        area: "TZIMAG2A.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 667, y: 83, z: 0 },
      gfx: {
        animation: "TBINMAG3.def",
        border: "TOIMAG3A.pcx",
        area: "TZIMAG3A.pcx"
      }
    },
    [Building.MageGuild4]: {
      position: { x: 667, y: 56, z: 0 },
      gfx: {
        animation: "TBINMAG4.def",
        border: "TOIMAG4A.pcx",
        area: "TZIMAG4A.pcx"
      }
    },
    [Building.MageGuild5]: {
      position: { x: 667, y: 35, z: 0 },
      gfx: {
        animation: "TBINMAG5.def",
        border: "TOIMAG5A.pcx",
        area: "TZIMAG5A.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 105, y: 219, z: 1 },
      gfx: {
        animation: "TBINTVRN.def",
        border: "TOITAV.pcx",
        area: "TZITAV.pcx"
      }
    },
    [Building.Fort]: {
      position: { x: 222, y: 44, z: 0 },
      gfx: {
        animation: "TBINCSTL.def",
        border: "TOICAS2A.pcx",
        area: "TZICAS2A.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 222, y: 44, z: 0 },
      gfx: {
        animation: "TBINCAS2.def",
        border: "TOICAS1A.pcx",
        area: "TZICAS1A.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 222, y: 18, z: 0 },
      gfx: {
        animation: "TBINCAS3.def",
        border: "TOICAS3A.pcx",
        area: "TZICAS3A.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: 0, y: 174, z: 0 },
      gfx: {
        animation: "TBINHALL.def",
        border: "TOIHAL1.pcx",
        area: "TZIHAL1.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 0, y: 174, z: 0 },
      gfx: {
        animation: "TBINHAL2.def",
        border: "TOIHAL2.pcx",
        area: "TZIHAL2.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 0, y: 174, z: 0 },
      gfx: {
        animation: "TBINHAL3.def",
        border: "TOIHAL3.pcx",
        area: "TZIHAL3.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 0, y: 131, z: 0 },
      gfx: {
        animation: "TBINHAL4.def",
        border: "TOIHAL4.pcx",
        area: "TZIHAL4.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 511, y: 301, z: 4 },
      gfx: {
        animation: "TBINMARK.def",
        border: "TOIMAR1.pcx",
        area: "TZIMAR1.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 497, y: 337, z: 5 },
      gfx: {
        animation: "TBINSILO.def",
        border: "TOIMAR2.pcx",
        area: "TZIMAR2.pcx"
      },
      requires: [Building.Marketplace],
      produce: { [Resource.Mercury]: 1 }
    },
    [Building.Blacksmith]: {
      position: { x: 684, y: 253, z: 1 },
      gfx: {
        animation: "TBINBLAK.def",
        border: "TOIBLKA.pcx",
        area: "TZIBLKA.pcx"
      }
    },
    [Building.Horde1]: {
      position: { x: 614, y: 256, z: 0 },
      gfx: {
        animation: "TBINHRD1.def",
        border: "TOIMP1HA.pcx",
        area: "TZIMP1HA.pcx"
      },
      requires: [Building.Dwelling1]
    },

    [Building.Special2]: {
      position: { x: 297, y: 0, z: -1 },
      gfx: {
        animation: "TBINEXT0.def",
        border: "TOICAB1A.pcx",
        area: "TZICAB1A.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Special3]: {
      position: { x: 227, y: 174, z: 2 },
      gfx: {
        animation: "TBINEXT1.def",
        border: "TOICASGA.pcx",
        area: "TZICASGA.pcx"
      },
      requires: [Building.Citadel]
    },
    [Building.Special4]: {
      position: { x: 593, y: 104, z: 0 },
      gfx: {
        animation: "TBINEXT2.def",
        border: "TOIPAIN.pcx",
        area: "TZIPAIN.pcx"
      },
      requires: [Building.MageGuild1]
    },
    [Building.Horde3]: {
      position: { x: 10, y: 301, z: 0 },
      gfx: {
        animation: "TBINHRD3.def",
        border: "TOIHND1H.pcx",
        area: "TZIHND1H.pcx"
      },
      requires: [Building.Dwelling3]
    },

    [Building.Grail]: {
      position: { x: 24, y: 10, z: -1 },
      gfx: {
        animation: "TBINHOLY.def",
        border: "TOIHOLY.pcx",
        area: "TZIHOLY.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },
    [Building.Dwelling1]: {
      position: { x: 614, y: 256, z: 0 },
      gfx: {
        animation: "TBINDW_0.def",
        border: "TOIMP1A.pcx",
        area: "TZIMP1A.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 187, y: 248, z: 4 },
      gfx: {
        animation: "TBINDW_1.def",
        border: "TOIGOG1A.pcx",
        area: "TZIGOG1A.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling3]: {
      position: { x: 9, y: 325, z: 0 },
      gfx: {
        animation: "TBINDW_2.def",
        border: "TOIHND1.pcx",
        area: "TZIHND1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling4]: {
      position: { x: 414, y: 204, z: 2 },
      gfx: {
        animation: "TBINDW_3.def",
        border: "TOIDMN1.pcx",
        area: "TZIDMN1.pcx"
      },
      requires: [Building.Dwelling2]
    },
    [Building.Dwelling5]: {
      position: { x: 359, y: 296, z: 3 },
      gfx: {
        animation: "TBINDW_4.def",
        border: "TOIPIT1.pcx",
        area: "TZIPIT1.pcx"
      },
      requires: [Building.Dwelling4]
    },
    [Building.Dwelling6]: {
      position: { x: 220, y: 350, z: 5 },
      gfx: {
        animation: "TBINDW_5.def",
        border: "TOIEFR1.pcx",
        area: "TZIEFR1.pcx"
      },
      requires: [Building.MageGuild1, Building.Dwelling4]
    },
    [Building.Dwelling7]: {
      position: { x: 420, y: 153, z: -1 },
      gfx: {
        animation: "TBINDW_6.def",
        border: "TOIDVL1.pcx",
        area: "TZIDVL1.pcx"
      },
      requires: [Building.Dwelling5, Building.Dwelling6]
    },
    [Building.DwellingUp1]: {
      position: { x: 614, y: 221, z: 0 },
      gfx: {
        animation: "TBINUP_0.def",
        border: "TOIMP2A.pcx",
        area: "TZIMP2A.pcx"
      }
    },
    [Building.DwellingUp2]: {
      position: { x: 187, y: 212, z: 4 },
      gfx: {
        animation: "TBINUP_1.def",
        border: "TOIGOG2A.pcx",
        area: "TZIGOG2A.pcx"
      }
    },
    [Building.DwellingUp3]: {
      position: { x: 9, y: 273, z: 0 },
      gfx: {
        animation: "TBINUP_2.def",
        border: "TOIHND2.pcx",
        area: "TZIHND2.pcx"
      }
    },
    [Building.DwellingUp4]: {
      position: { x: 412, y: 197, z: 2 },
      gfx: {
        animation: "TBINUP_3.def",
        border: "TOIDMN2.pcx",
        area: "TZIDMN2.pcx"
      }
    },
    [Building.DwellingUp5]: {
      position: { x: 359, y: 244, z: 3 },
      gfx: {
        animation: "TBINUP_4.def",
        border: "TOIPIT2.pcx",
        area: "TZIPIT2.pcx"
      },
      requires: [Building.MageGuild2]
    },
    [Building.DwellingUp6]: {
      position: { x: 220, y: 282, z: 5 },
      gfx: {
        animation: "TBINUP_5.def",
        border: "TOIEFR2.pcx",
        area: "TZIEFR2.pcx"
      }
    },
    [Building.DwellingUp7]: {
      position: { x: 420, y: 105, z: -1 },
      gfx: {
        animation: "TBINUP_6.def",
        border: "TOIDVL2.pcx",
        area: "TZIDVL2.pcx"
      }
    },
    [Building.ArtifactMerchants]: null,
    [Building.Shipyard]: null,
    [Building.Special1]: null,
    [Building.Horde2]: null,
    [Building.Horde4]: null,
    [Building.Horde5]: null
  },
  animations: [],
  extras: {},
  upgrades: {
    [Building.Horde1]: {
      position: { x: 614, y: 221, z: 0 },
      gfx: {
        animation: "TBINHRD2.def",
        border: "TOIMP2HA.pcx",
        area: "TZIMP2HA.pcx"
      },
      requires: [Building.DwellingUp1]
    },
    [Building.Horde3]: {
      position: { x: 9, y: 273, z: 0 },
      gfx: {
        animation: "TBINHRD4.def",
        border: "TOIHND2H.pcx",
        area: "TZIHND2H.pcx"
      },
      requires: [Building.DwellingUp3]
    }
  },
  musicTheme: "music/InfernoTown",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBINBACK.pcx",
  guildWindow: "TPMAGEIN.pcx",
  buildingsIcons: "HALLINFR.DEF",
  hallBackground: "TPTHBKIN.pcx",
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
      [Building.Special4],
      [Building.Special2]
    ],
    [[Building.Special3], [Building.Horde1], [Building.Horde3]],
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
    [Creature.Imp, Creature.Familiar],
    [Creature.Gog, Creature.Magog],
    [Creature.HellHound, Creature.Cerberus],
    [Creature.Demon, Creature.HornedDemon],
    [Creature.PitFiend, Creature.PitLord],
    [Creature.Efreeti, Creature.EfreetSultan],
    [Creature.Devil, Creature.ArchDevil]
  ],
  primaryResource: Resource.Mercury,
  warMachine: Artifact.AmmoCart,
  creatureBackground: "CRBKGINF.pcx"
};
