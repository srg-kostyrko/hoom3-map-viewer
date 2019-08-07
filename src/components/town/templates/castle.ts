import { Building, Resource, Creature, Artifact } from "homm3-parsers";
import { TownTemplate } from "../../../contracts/town";

export const castleTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 707, y: 166, z: 1 },
      gfx: {
        animation: "TBCSMAGE.def",
        border: "TOCSMAG1.pcx",
        area: "TZCSMAG1.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 706, y: 135, z: 1 },
      gfx: {
        animation: "TBCSMAG2.def",
        border: "TOCSMAG2.pcx",
        area: "TZCSMAG2.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 704, y: 107, z: 1 },
      gfx: {
        animation: "TBCSMAG3.def",
        border: "TOCSM301.pcx",
        area: "TZCSM301.pcx"
      }
    },
    [Building.MageGuild4]: {
      position: { x: 704, y: 76, z: 1 },
      gfx: {
        animation: "TBCSMAG4.def",
        border: "TOCSM401.pcx",
        area: "TZCSM401.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 0, y: 230, z: 1 },
      gfx: {
        animation: "TBCSTVRN.def",
        border: "TOCSTAV1.pcx",
        area: "TZCSTAV1.pcx"
      }
    },
    [Building.Shipyard]: {
      position: { x: 478, y: 134, z: 0 },
      gfx: {
        animation: "TBCSDOCK.def",
        border: "TOCSDKMS.pcx",
        area: "TZCSDKMS.pcx",
        noAnimation: true
      }
    },
    [Building.Fort]: {
      position: { x: 595, y: 66, z: 0 },
      gfx: {
        animation: "TBCSCSTL.def",
        border: "TOCSCAS1.pcx",
        area: "TZCSCAS1.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 478, y: 66, z: 0 },
      gfx: {
        animation: "TBCSCAS2.def",
        border: "TOCSCAS2.pcx",
        area: "TZCSCAS2.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 478, y: 37, z: 0 },
      gfx: {
        animation: "TBCSCAS3.def",
        border: "TOCSCAS3.pcx",
        area: "TZCSCAS3.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: 0, y: 209, z: 0 },
      gfx: {
        animation: "TBCSHALL.def",
        border: "TOCSH101.pcx",
        area: "TZCSH101.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 0, y: 176, z: 0 },
      gfx: {
        animation: "TBCSHAL2.def",
        border: "TOCSH201.pcx",
        area: "TZCSH201.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 0, y: 164, z: 0 },
      gfx: {
        animation: "TBCSHAL3.def",
        border: "TOCSH301.pcx",
        area: "TZCSH301.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 0, y: 154, z: 0 },
      gfx: {
        animation: "TBCSHAL4.def",
        border: "TOCSH401.pcx",
        area: "TZCSH401.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 413, y: 264, z: 0 },
      gfx: {
        animation: "TBCSMARK.def",
        border: "TOCSMRK1.pcx",
        area: "TZCSMRK1.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 488, y: 228, z: 0 },
      gfx: {
        animation: "TBCSSILO.def",
        border: "TOCSMRK2.pcx",
        area: "TZCSMRK2.pcx"
      },
      requires: [Building.Marketplace],
      produce: { [Resource.Ore]: 1, [Resource.Wood]: 1 }
    },
    [Building.Blacksmith]: {
      position: { x: 213, y: 251, z: 0 },
      gfx: {
        animation: "TBCSBLAK.def",
        border: "TOCSBLAK.pcx",
        area: "TZCSBLAK.pcx"
      }
    },
    [Building.Special1]: {
      position: { x: 533, y: 71, z: 0 },
      gfx: {
        animation: "TBCSSPEC.def",
        border: "TOCSLT01.pcx",
        area: "TZCSLT01.pcx"
      },
      requires: [Building.Shipyard]
    },
    [Building.Horde3]: {
      position: { x: 76, y: 53, z: -1 },
      gfx: {
        animation: "TBCSHRD1.def",
        border: "TOCSGR1H.pcx",
        area: "TZCSGR1H.pcx"
      },
      requires: [Building.Dwelling3]
    },

    [Building.Special2]: {
      position: { x: 384, y: 193, z: -2 },
      gfx: {
        animation: "TBCSEXT0.def",
        border: "TOCSCAVM.pcx",
        area: "TZCSCAVM.pcx"
      },
      requires: [Building.Dwelling4]
    },
    [Building.Special3]: {
      position: { x: 0, y: 198, z: 1 },
      gfx: {
        animation: "TBCSEXT1.def",
        border: "TOCSTAV2.pcx",
        area: "TZCSTAV2.pcx"
      },
      requires: [Building.Tavern]
    },
    [Building.Grail]: {
      position: { x: 456, y: 109, z: -1 },
      gfx: {
        animation: "TBCSHOLY.def",
        border: "TOCSHOLY.pcx",
        area: "TZCSHOLY.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },
    [Building.Dwelling1]: {
      position: { x: 304, y: 92, z: 0 },
      gfx: {
        animation: "TBCSDW_0.def",
        border: "TOCSPIK1.pcx",
        area: "TZCSPIK1.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 360, y: 130, z: 0 },
      gfx: {
        animation: "TBCSDW_1.def",
        border: "TOCSCRS1.pcx",
        area: "TZCSCRS1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling3]: {
      position: { x: 76, y: 57, z: -1 },
      gfx: {
        animation: "TBCSDW_2.def",
        border: "TOCSGR1N.pcx",
        area: "TZCSGR1N.pcx"
      },
      requires: [Building.Dwelling4]
    },
    [Building.Dwelling4]: {
      position: { x: 176, y: 101, z: 0 },
      gfx: {
        animation: "TBCSDW_3.def",
        border: "TOCSSWD1.pcx",
        area: "TZCSSWD1.pcx"
      },
      requires: [Building.Blacksmith, Building.Dwelling1]
    },
    [Building.Dwelling5]: {
      position: { x: 563, y: 211, z: 1 },
      gfx: {
        animation: "TBCSDW_4.def",
        border: "TOCSMON1.pcx",
        area: "TZCSMON1.pcx"
      },
      requires: [Building.MageGuild1, Building.Dwelling4]
    },
    [Building.Dwelling6]: {
      position: { x: 174, y: 190, z: -1 },
      gfx: {
        animation: "TBCSDW_5.def",
        border: "TOCSC101.pcx",
        area: "TZCSCAV1.pcx"
      },
      requires: [Building.Special2]
    },
    [Building.Dwelling7]: {
      position: { x: 303, y: 0, z: -1 },
      gfx: {
        animation: "TBCSDW_6.def",
        border: "TOCSANG1.pcx",
        area: "TZCSANG1.pcx"
      },
      requires: [Building.Dwelling5]
    },
    [Building.DwellingUp1]: {
      position: { x: 304, y: 65, z: 0 },
      gfx: {
        animation: "TBCSUP_0.def",
        border: "TOCSPIK2.pcx",
        area: "TZCSPIK2.pcx"
      }
    },
    [Building.DwellingUp2]: {
      position: { x: 360, y: 115, z: 0 },
      gfx: {
        animation: "TBCSUP_1.def",
        border: "TOCSCRS2.pcx",
        area: "TZCSCRS2.pcx"
      }
    },
    [Building.DwellingUp3]: {
      position: { x: 76, y: 35, z: -1 },
      gfx: {
        animation: "TBCSUP_2.def",
        border: "TOCSGR2N.pcx",
        area: "TZCSGR2N.pcx"
      }
    },
    [Building.DwellingUp4]: {
      position: { x: 176, y: 85, z: 0 },
      gfx: {
        animation: "TBCSUP_3.def",
        border: "TOCSSWD2.pcx",
        area: "TZCSSWD2.pcx"
      }
    },
    [Building.DwellingUp5]: {
      position: { x: 563, y: 173, z: 1 },
      gfx: {
        animation: "TBCSUP_4.def",
        border: "TOCSMON2.pcx",
        area: "TZCSMON2.pcx"
      }
    },
    [Building.DwellingUp6]: {
      position: { x: 160, y: 190, z: -1 },
      gfx: {
        animation: "TBCSUP_5.def",
        border: "TOCSCAV2.pcx",
        area: "TZCSCAV2.pcx"
      }
    },
    [Building.DwellingUp7]: {
      position: { x: 303, y: 0, z: -1 },
      gfx: {
        animation: "TBCSUP_6.def",
        border: "TOCSANG2.pcx",
        area: "TZCSANG2.pcx"
      }
    },
    [Building.ArtifactMerchants]: null,
    [Building.MageGuild5]: null,
    [Building.Special4]: null,
    [Building.Horde1]: null,
    [Building.Horde2]: null,
    [Building.Horde4]: null,
    [Building.Horde5]: null
  },
  animations: [
    {
      position: { x: 46, y: 119, z: 0 },
      gfx: "TBCSEXT2.def"
    }
  ],
  extras: {},
  upgrades: {
    [Building.Horde3]: {
      position: { x: 76, y: 35, z: -1 },
      gfx: {
        animation: "TBCSHRD2.def",
        border: "TOCSGR2H.pcx",
        area: "TZCSGR2H.pcx"
      },
      requires: [Building.DwellingUp3]
    },
    [Building.Shipyard]: {
      position: { x: 478, y: 134, z: 0 },
      gfx: {
        animation: "TBCSBOAT.def",
        border: "TOCSDKMN.pcx",
        area: "TZCSDKMN.pcx",
        noAnimation: true
      }
    }
  },
  musicTheme: "music/CstleTown",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBCSBACK.pcx",
  guildWindow: "TPMAGECS.pcx",
  buildingsIcons: "HALLCSTL.DEF",
  hallBackground: "TPTHBKCS.pcx",
  hallSlots: [
    [
      [
        Building.VillageHall,
        Building.TownHall,
        Building.CityHall,
        Building.Capitol
      ],
      [Building.Fort, Building.Citadel, Building.Castle],
      [Building.Tavern, Building.Special3],
      [Building.Blacksmith]
    ],
    [
      [Building.Marketplace, Building.ResourceSilo],
      [
        Building.MageGuild1,
        Building.MageGuild2,
        Building.MageGuild3,
        Building.MageGuild4
      ],
      [Building.Shipyard, Building.Special1]
    ],
    [[Building.Special2], [Building.Horde3]],
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
    [Creature.Pikeman, Creature.Halberdier],
    [Creature.Archer, Creature.Marksman],
    [Creature.Griffin, Creature.RoyalGriffin],
    [Creature.Swordsman, Creature.Crusader],
    [Creature.Monk, Creature.Zealot],
    [Creature.Cavalier, Creature.Champion],
    [Creature.Angel, Creature.Archangel]
  ],
  warMachine: Artifact.Ballista,
  creatureBackground: "CRBKGCAS.pcx"
};
