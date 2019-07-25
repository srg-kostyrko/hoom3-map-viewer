import { Building, Creature, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASCAS",
    "130px": "CRBKGCAS"
  },
  town: {
    structures: {
      extraAnimation: { animation: "TBCSEXT2.def", x: 46, y: 119 },
      [Building.MageGuild1]: {
        animation: "TBCSMAGE.def",
        x: 707,
        y: 166,
        z: 1,
        border: "TOCSMAG1.pcx",
        area: "TZCSMAG1.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBCSMAG2.def",
        x: 706,
        y: 135,
        z: 1,
        border: "TOCSMAG2.pcx",
        area: "TZCSMAG2.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBCSMAG3.def",
        x: 704,
        y: 107,
        z: 1,
        border: "TOCSM301.pcx",
        area: "TZCSM301.pcx"
      },
      [Building.MageGuild4]: {
        animation: "TBCSMAG4.def",
        x: 704,
        y: 76,
        z: 1,
        border: "TOCSM401.pcx",
        area: "TZCSM401.pcx"
      },
      [Building.Tavern]: {
        animation: "TBCSTVRN.def",
        x: 0,
        y: 230,
        z: 1,
        border: "TOCSTAV1.pcx",
        area: "TZCSTAV1.pcx"
      },
      [Building.Shipyard]: {
        animation: "TBCSDOCK.def",
        x: 478,
        y: 134,
        border: "TOCSDKMS.pcx",
        area: "TZCSDKMS.pcx"
      },
      [Building.Fort]: {
        animation: "TBCSCSTL.def",
        x: 595,
        y: 66,
        border: "TOCSCAS1.pcx",
        area: "TZCSCAS1.pcx"
      },
      [Building.Citadel]: {
        animation: "TBCSCAS2.def",
        x: 478,
        y: 66,
        border: "TOCSCAS2.pcx",
        area: "TZCSCAS2.pcx"
      },
      [Building.Castle]: {
        animation: "TBCSCAS3.def",
        x: 478,
        y: 37,
        border: "TOCSCAS3.pcx",
        area: "TZCSCAS3.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBCSHALL.def",
        x: 0,
        y: 209,
        border: "TOCSH101.pcx",
        area: "TZCSH101.pcx"
      },
      [Building.TownHall]: {
        animation: "TBCSHAL2.def",
        x: 0,
        y: 176,
        border: "TOCSH201.pcx",
        area: "TZCSH201.pcx"
      },
      [Building.CityHall]: {
        animation: "TBCSHAL3.def",
        x: 0,
        y: 164,
        border: "TOCSH301.pcx",
        area: "TZCSH301.pcx"
      },
      [Building.Capitol]: {
        animation: "TBCSHAL4.def",
        x: 0,
        y: 154,
        border: "TOCSH401.pcx",
        area: "TZCSH401.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBCSMARK.def",
        x: 413,
        y: 264,
        border: "TOCSMRK1.pcx",
        area: "TZCSMRK1.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBCSSILO.def",
        x: 488,
        y: 228,
        border: "TOCSMRK2.pcx",
        area: "TZCSMRK2.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBCSBLAK.def",
        x: 213,
        y: 251,
        border: "TOCSBLAK.pcx",
        area: "TZCSBLAK.pcx"
      },
      [Building.Special1]: {
        animation: "TBCSSPEC.def",
        x: 533,
        y: 71,
        border: "TOCSLT01.pcx",
        area: "TZCSLT01.pcx"
      },
      [Building.Horde3]: {
        animation: "TBCSHRD1.def",
        x: 76,
        y: 53,
        z: -1,
        border: "TOCSGR1H.pcx",
        area: "TZCSGR1H.pcx",
        hidden: true
      },
      horde3Upgr: {
        animation: "TBCSHRD2.def",
        x: 76,
        y: 35,
        z: -1,
        border: "TOCSGR2H.pcx",
        area: "TZCSGR2H.pcx",
        hidden: true,
        builds: "horde3"
      },
      ship: {
        animation: "TBCSBOAT.def",
        x: 478,
        y: 134,
        border: "TOCSDKMN.pcx",
        area: "TZCSDKMN.pcx",
        hidden: true
      },
      [Building.Special2]: {
        animation: "TBCSEXT0.def",
        x: 384,
        y: 193,
        z: -2,
        border: "TOCSCAVM.pcx",
        area: "TZCSCAVM.pcx"
      },
      [Building.Special3]: {
        animation: "TBCSEXT1.def",
        x: 0,
        y: 198,
        z: 1,
        border: "TOCSTAV2.pcx",
        area: "TZCSTAV2.pcx"
      },
      [Building.Grail]: {
        animation: "TBCSHOLY.def",
        x: 456,
        y: 109,
        z: -1,
        border: "TOCSHOLY.pcx",
        area: "TZCSHOLY.pcx"
      },
      [Building.Dwelling1]: {
        animation: "TBCSDW_0.def",
        x: 304,
        y: 92,
        border: "TOCSPIK1.pcx",
        area: "TZCSPIK1.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBCSDW_1.def",
        x: 360,
        y: 130,
        border: "TOCSCRS1.pcx",
        area: "TZCSCRS1.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBCSDW_2.def",
        x: 76,
        y: 57,
        z: -1,
        border: "TOCSGR1N.pcx",
        area: "TZCSGR1N.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBCSDW_3.def",
        x: 176,
        y: 101,
        border: "TOCSSWD1.pcx",
        area: "TZCSSWD1.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBCSDW_4.def",
        x: 563,
        y: 211,
        z: 1,
        border: "TOCSMON1.pcx",
        area: "TZCSMON1.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBCSDW_5.def",
        x: 174,
        y: 190,
        z: -1,
        border: "TOCSC101.pcx",
        area: "TZCSCAV1.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBCSDW_6.def",
        x: 303,
        y: 0,
        z: -1,
        border: "TOCSANG1.pcx",
        area: "TZCSANG1.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBCSUP_0.def",
        x: 304,
        y: 65,
        border: "TOCSPIK2.pcx",
        area: "TZCSPIK2.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBCSUP_1.def",
        x: 360,
        y: 115,
        border: "TOCSCRS2.pcx",
        area: "TZCSCRS2.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBCSUP_2.def",
        x: 76,
        y: 35,
        z: -1,
        border: "TOCSGR2N.pcx",
        area: "TZCSGR2N.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBCSUP_3.def",
        x: 176,
        y: 85,
        border: "TOCSSWD2.pcx",
        area: "TZCSSWD2.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBCSUP_4.def",
        x: 563,
        y: 173,
        z: 1,
        border: "TOCSMON2.pcx",
        area: "TZCSMON2.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBCSUP_5.def",
        x: 160,
        y: 190,
        z: -1,
        border: "TOCSCAV2.pcx",
        area: "TZCSCAV2.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBCSUP_6.def",
        x: 303,
        y: 0,
        z: -1,
        border: "TOCSANG2.pcx",
        area: "TZCSANG2.pcx"
      }
    },

    townBackground: "TBCSBACK.pcx",
    guildWindow: "TPMAGECS.pcx",
    buildingsIcons: "HALLCSTL.DEF",
    hallBackground: "TPTHBKCS.BMP",
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
      [[Building.Special2], [Building.Horde3, "horde3Upgr"]],
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

    buildings: {
      [Building.MageGuild1]: {},
      [Building.MageGuild2]: { upgrades: Building.MageGuild1 },
      [Building.MageGuild3]: { upgrades: Building.MageGuild2 },
      [Building.MageGuild4]: { upgrades: Building.MageGuild3 },
      [Building.Tavern]: {},
      [Building.Shipyard]: {},
      [Building.Fort]: {},
      [Building.Citadel]: { upgrades: Building.Fort },
      [Building.Castle]: { upgrades: Building.Citadel },
      [Building.VillageHall]: { mode: "auto", produce: { gold: 500 } },
      [Building.TownHall]: {
        upgrades: Building.VillageHall,
        requires: [Building.Tavern],
        produce: { gold: 1000 }
      },
      [Building.CityHall]: {
        upgrades: Building.TownHall,
        requires: [
          Building.MageGuild1,
          Building.Marketplace,
          Building.Blacksmith
        ],
        produce: { gold: 2000 }
      },
      [Building.Capitol]: {
        upgrades: Building.CityHall,
        requires: [Building.Castle],
        produce: { gold: 4000 }
      },
      [Building.Marketplace]: {},
      [Building.ResourceSilo]: {
        requires: [Building.Marketplace],
        produce: { ore: 1, wood: 1 }
      },
      [Building.Blacksmith]: {},

      [Building.Special1]: { requires: [Building.Shipyard] },
      [Building.Horde3]: { upgrades: Building.Dwelling3 },
      horde3Upgr: {
        upgrades: Building.DwellingUp3,
        requires: [Building.Horde3],
        mode: "auto"
      },
      ship: { upgrades: Building.Shipyard },
      [Building.Special2]: { requires: [Building.Dwelling4] },
      [Building.Special3]: { upgrades: Building.Tavern },
      [Building.Grail]: { mode: "grail", produce: { gold: 5000 } },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: { requires: [Building.Dwelling1] },
      [Building.Dwelling3]: { requires: [Building.Dwelling4] },
      [Building.Dwelling4]: {
        requires: [Building.Blacksmith, Building.Dwelling1]
      },
      [Building.Dwelling5]: {
        requires: [Building.MageGuild1, Building.Dwelling4]
      },
      [Building.Dwelling6]: { requires: [Building.Special2] },
      [Building.Dwelling7]: { requires: [Building.Dwelling5] },

      [Building.DwellingUp1]: { upgrades: Building.Dwelling1 },
      [Building.DwellingUp2]: { upgrades: Building.Dwelling2 },
      [Building.DwellingUp3]: { upgrades: Building.Dwelling3 },
      [Building.DwellingUp4]: { upgrades: Building.Dwelling4 },
      [Building.DwellingUp5]: { upgrades: Building.Dwelling5 },
      [Building.DwellingUp6]: { upgrades: Building.Dwelling6 },
      [Building.DwellingUp7]: { upgrades: Building.Dwelling7 }
    }
  }
};
