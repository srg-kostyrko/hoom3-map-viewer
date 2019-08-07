import { TownTemplate } from "../../../contracts/town";
import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export const dungeonTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 164, y: 119, z: -1 },
      gfx: {
        animation: "TBDNMAGE.def",
        border: "TODMAG1.pcx",
        area: "TZDMAG1.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 164, y: 97, z: -1 },
      gfx: {
        animation: "TBDNMAG2.def",
        border: "TODMAG2.pcx",
        area: "TZDMAG2.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 164, y: 77, z: -1 },
      gfx: {
        animation: "TBDNMAG3.def",
        border: "TODMAG3.pcx",
        area: "TZDMAG3.pcx"
      }
    },
    [Building.MageGuild4]: {
      position: { x: 164, y: 61, z: -1 },
      gfx: {
        animation: "TBDNMAG4.def",
        border: "TODMAG4.pcx",
        area: "TZDMAG4.pcx"
      }
    },
    [Building.MageGuild5]: {
      position: { x: 164, y: 15, z: -1 },
      gfx: {
        animation: "TBDNMAG5.def",
        border: "TODMAG5.pcx",
        area: "TZDMAG5.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 211, y: 297, z: 0 },
      gfx: {
        animation: "TBDNTVRN.def",
        border: "TODTAV.pcx",
        area: "TZDTAV.pcx"
      }
    },
    [Building.Fort]: {
      position: { x: 363, y: 87, z: 2 },
      gfx: {
        animation: "TBDNCSTL.def",
        border: "TODCAS1.pcx",
        area: "TZDCAS1.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 363, y: 87, z: 2 },
      gfx: {
        animation: "TBDNCAS2.def",
        border: "TODCAS2.pcx",
        area: "TZDCAS2.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 363, y: 87, z: 2 },
      gfx: {
        animation: "TBDNCAS3.def",
        border: "TODCAS3.pcx",
        area: "TZDCAS3.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: 0, y: 234, z: 0 },
      gfx: {
        animation: "TBDNHALL.def",
        border: "TODHALL1.pcx",
        area: "TZDHALL1.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 0, y: 223, z: 0 },
      gfx: {
        animation: "TBDNHAL2.def",
        border: "TODHALL2.pcx",
        area: "TZDHALL2.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 0, y: 223, z: 0 },
      gfx: {
        animation: "TBDNHAL3.def",
        border: "TODHALL3.pcx",
        area: "TZDHALL3.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 0, y: 203, z: -1 },
      gfx: {
        animation: "TBDNHAL4.def",
        border: "TODHALL4.pcx",
        area: "TZDHALL4.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 590, y: 318, z: -2 },
      gfx: {
        animation: "TBDNMARK.def",
        border: "TODMARK.pcx",
        area: "TZDMARK.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 624, y: 335, z: 1 },
      gfx: {
        animation: "TBDNSILO.def",
        border: "TODSILO.pcx",
        area: "TZDSILO.pcx"
      },
      requires: [Building.Marketplace]
    },
    [Building.Blacksmith]: {
      position: { x: 544, y: 248, z: -3 },
      gfx: {
        animation: "TBDNBLAK.def",
        border: "TODSMITH.pcx",
        area: "TZDSMITH.pcx"
      }
    },
    [Building.Special1]: {
      position: { x: 746, y: 294, z: 1 },
      gfx: {
        animation: "TBDNSPEC.def",
        border: "TODART.pcx",
        area: "TZDART.pcx"
      },
      requires: [Building.Marketplace]
    },
    [Building.Horde1]: {
      position: { x: 0, y: 326, z: 2 },
      gfx: {
        animation: "TBDNHRD1.def",
        border: "TODTR1HA.pcx",
        area: "TZDTR1HA.pcx"
      },
      requires: [Building.Dwelling1]
    },

    [Building.Special2]: {
      position: { x: 131, y: 26, z: 0 },
      gfx: {
        animation: "TBDNEXT0.def",
        border: "TODVOR1A.pcx",
        area: "TZDVOR1A.pcx"
      },
      requires: [Building.MageGuild1]
    },
    [Building.Special3]: {
      position: { x: 687, y: 177, z: 0 },
      gfx: {
        animation: "TBDNEXT1.def",
        border: "TODPORTA.pcx",
        area: "TZDPORTA.pcx"
      }
    },
    [Building.Special4]: {
      position: { x: 313, y: 298, z: 0 },
      gfx: {
        animation: "TBDNEXT2.def",
        border: "TODACAD.pcx",
        area: "TZDACAD.pcx"
      }
    },
    [Building.Grail]: {
      position: { x: 562, y: 24, z: 1 },
      gfx: {
        animation: "TBDNHOLY.def",
        border: "TODHOLY.pcx",
        area: "TZDHOLY.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },
    [Building.Dwelling1]: {
      position: { x: 0, y: 326, z: 2 },
      gfx: {
        animation: "TBDNDW_0.def",
        border: "TODTRG1A.pcx",
        area: "TZDTRG1A.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 0, y: 26, z: 0 },
      gfx: {
        animation: "TBDNDW_1.def",
        border: "TODHAR1.pcx",
        area: "TZDHAR1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling3]: {
      position: { x: 118, y: 308, z: 1 },
      gfx: {
        animation: "TBDNDW_2.def",
        border: "TODBEH1A.pcx",
        area: "TZDBEH1A.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling4]: {
      position: { x: 300, y: 29, z: -1 },
      gfx: {
        animation: "TBDNDW_3.def",
        border: "TODMED1.pcx",
        area: "TZDMED1.pcx"
      },
      requires: [Building.Dwelling2, Building.Dwelling3]
    },
    [Building.Dwelling5]: {
      position: { x: 551, y: 186, z: 1 },
      gfx: {
        animation: "TBDNDW_4.def",
        border: "TODMIN1.pcx",
        area: "TZDMIN1.pcx"
      },
      requires: [Building.Dwelling4]
    },
    [Building.Dwelling6]: {
      position: { x: 270, y: 253, z: -1 },
      gfx: {
        animation: "TBDNDW_5.def",
        border: "TODMAN1.pcx",
        area: "TZDMAN1.pcx"
      },
      requires: [Building.Dwelling4]
    },
    [Building.Dwelling7]: {
      position: { x: 550, y: 0, z: -1 },
      gfx: {
        animation: "TBDNDW_6.def",
        border: "TODDRA1A.pcx",
        area: "TZDDRA1A.pcx"
      },
      requires: [Building.MageGuild2, Building.Dwelling5, Building.Dwelling6]
    },
    [Building.DwellingUp1]: {
      position: { x: 0, y: 300, z: 2 },
      gfx: {
        animation: "TBDNUP_0.def",
        border: "TODTRG2A.pcx",
        area: "TZDTRG2A.pcx"
      }
    },
    [Building.DwellingUp2]: {
      position: { x: 0, y: 26, z: 0 },
      gfx: {
        animation: "TBDNUP_1.def",
        border: "TODHAR2.pcx",
        area: "TZDHAR2.pcx"
      }
    },
    [Building.DwellingUp3]: {
      position: { x: 118, y: 256, z: 1 },
      gfx: {
        animation: "TBDNUP_2.def",
        border: "TODBEH2A.pcx",
        area: "TZDBEH2A.pcx"
      }
    },
    [Building.DwellingUp4]: {
      position: { x: 300, y: 29, z: -1 },
      gfx: {
        animation: "TBDNUP_3.def",
        border: "TODMED2.pcx",
        area: "TZDMED2.pcx"
      }
    },
    [Building.DwellingUp5]: {
      position: { x: 519, y: 172, z: 1 },
      gfx: {
        animation: "TBDNUP_4.def",
        border: "TODMIN2.pcx",
        area: "TZDMIN2.pcx"
      }
    },
    [Building.DwellingUp6]: {
      position: { x: 270, y: 253, z: -1 },
      gfx: {
        animation: "TBDNUP_5.def",
        border: "TODMAN2.pcx",
        area: "TZDMAN2.pcx"
      }
    },
    [Building.DwellingUp7]: {
      position: { x: 550, y: 0, z: -1 },
      gfx: {
        animation: "TBDNUP_6.def",
        border: "TODDRA2A.pcx",
        area: "TZDDRA2A.pcx"
      },
      requires: [Building.MageGuild3]
    },
    [Building.ArtifactMerchants]: null,
    [Building.Shipyard]: null,
    [Building.Horde2]: null,
    [Building.Horde3]: null,
    [Building.Horde4]: null,
    [Building.Horde5]: null
  },
  animations: [],
  extras: {},
  upgrades: {
    [Building.Horde1]: {
      position: { x: 0, y: 300, z: 2 },
      gfx: {
        animation: "TBDNHRD2.def",
        border: "TODTR2HA.pcx",
        area: "TZDTR2HA.pcx"
      },
      requires: [Building.DwellingUp1]
    }
  },
  musicTheme: "music/Dungeon",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBDNBACK.pcx",
  guildWindow: "TPMAGEDN.pcx",
  buildingsIcons: "HALLDUNG.DEF",
  hallBackground: "TPTHBKDG.pcx",
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
      [Building.Special3]
    ],
    [[Building.Special1], [Building.Special4], [Building.Horde1]],
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
    [Creature.Troglodyte, Creature.InfernalTroglodyte],
    [Creature.Harpy, Creature.HarpyHag],
    [Creature.Beholder, Creature.EvilEye],
    [Creature.Medusa, Creature.MedusaQueen],
    [Creature.Minotaur, Creature.MinotaurKing],
    [Creature.Manticore, Creature.Scorpicore],
    [Creature.RedDragon, Creature.BlackDragon]
  ],
  primaryResource: Resource.Sulfur,
  warMachine: Artifact.Ballista,
  creatureBackground: "CRBKGDUN.pcx"
};
