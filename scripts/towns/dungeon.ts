import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASDUN",
    "130px": "CRBKGDUN"
  },
  town: {
    structures: {
      [Building.MageGuild1]: {
        animation: "TBDNMAGE.def",
        x: 164,
        y: 119,
        z: -1,
        border: "TODMAG1.pcx",
        area: "TZDMAG1.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBDNMAG2.def",
        x: 164,
        y: 97,
        z: -1,
        border: "TODMAG2.pcx",
        area: "TZDMAG2.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBDNMAG3.def",
        x: 164,
        y: 77,
        z: -1,
        border: "TODMAG3.pcx",
        area: "TZDMAG3.pcx"
      },
      [Building.MageGuild4]: {
        animation: "TBDNMAG4.def",
        x: 164,
        y: 61,
        z: -1,
        border: "TODMAG4.pcx",
        area: "TZDMAG4.pcx"
      },
      [Building.MageGuild5]: {
        animation: "TBDNMAG5.def",
        x: 164,
        y: 15,
        z: -1,
        border: "TODMAG5.pcx",
        area: "TZDMAG5.pcx"
      },
      [Building.Tavern]: {
        animation: "TBDNTVRN.def",
        x: 211,
        y: 297,
        border: "TODTAV.pcx",
        area: "TZDTAV.pcx"
      },
      [Building.Fort]: {
        animation: "TBDNCSTL.def",
        x: 363,
        y: 87,
        z: 2,
        border: "TODCAS1.pcx",
        area: "TZDCAS1.pcx"
      },
      [Building.Citadel]: {
        animation: "TBDNCAS2.def",
        x: 363,
        y: 87,
        z: 2,
        border: "TODCAS2.pcx",
        area: "TZDCAS2.pcx"
      },
      [Building.Castle]: {
        animation: "TBDNCAS3.def",
        x: 363,
        y: 87,
        z: 2,
        border: "TODCAS3.pcx",
        area: "TZDCAS3.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBDNHALL.def",
        x: 0,
        y: 234,
        border: "TODHALL1.pcx",
        area: "TZDHALL1.pcx"
      },
      [Building.TownHall]: {
        animation: "TBDNHAL2.def",
        x: 0,
        y: 223,
        border: "TODHALL2.pcx",
        area: "TZDHALL2.pcx"
      },
      [Building.CityHall]: {
        animation: "TBDNHAL3.def",
        x: 0,
        y: 223,
        border: "TODHALL3.pcx",
        area: "TZDHALL3.pcx"
      },
      [Building.Capitol]: {
        animation: "TBDNHAL4.def",
        x: 0,
        y: 203,
        z: -1,
        border: "TODHALL4.pcx",
        area: "TZDHALL4.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBDNMARK.def",
        x: 590,
        y: 318,
        z: -2,
        border: "TODMARK.pcx",
        area: "TZDMARK.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBDNSILO.def",
        x: 624,
        y: 335,
        z: 1,
        border: "TODSILO.pcx",
        area: "TZDSILO.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBDNBLAK.def",
        x: 544,
        y: 248,
        z: -3,
        border: "TODSMITH.pcx",
        area: "TZDSMITH.pcx"
      },
      [Building.Special1]: {
        animation: "TBDNSPEC.def",
        x: 746,
        y: 294,
        z: 1,
        border: "TODART.pcx",
        area: "TZDART.pcx"
      },
      [Building.Horde1]: {
        animation: "TBDNHRD1.def",
        x: 0,
        y: 326,
        z: 2,
        border: "TODTR1HA.pcx",
        area: "TZDTR1HA.pcx",
        hidden: true
      },
      horde1Upgr: {
        animation: "TBDNHRD2.def",
        x: 0,
        y: 300,
        z: 2,
        border: "TODTR2HA.pcx",
        area: "TZDTR2HA.pcx",
        hidden: true,
        builds: "horde1"
      },
      [Building.Special2]: {
        animation: "TBDNEXT0.def",
        x: 131,
        y: 26,
        border: "TODVOR1A.pcx",
        area: "TZDVOR1A.pcx"
      },
      [Building.Special3]: {
        animation: "TBDNEXT1.def",
        x: 687,
        y: 177,
        border: "TODPORTA.pcx",
        area: "TZDPORTA.pcx"
      },
      [Building.Special4]: {
        animation: "TBDNEXT2.def",
        x: 313,
        y: 298,
        border: "TODACAD.pcx",
        area: "TZDACAD.pcx"
      },
      [Building.Grail]: {
        animation: "TBDNHOLY.def",
        x: 562,
        y: 24,
        z: 1,
        border: "TODHOLY.pcx",
        area: "TZDHOLY.pcx"
      },
      [Building.Dwelling1]: {
        animation: "TBDNDW_0.def",
        x: 0,
        y: 326,
        z: 2,
        border: "TODTRG1A.pcx",
        area: "TZDTRG1A.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBDNDW_1.def",
        x: 0,
        y: 26,
        border: "TODHAR1.pcx",
        area: "TZDHAR1.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBDNDW_2.def",
        x: 118,
        y: 308,
        z: 1,
        border: "TODBEH1A.pcx",
        area: "TZDBEH1A.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBDNDW_3.def",
        x: 300,
        y: 29,
        z: -1,
        border: "TODMED1.pcx",
        area: "TZDMED1.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBDNDW_4.def",
        x: 551,
        y: 186,
        z: 1,
        border: "TODMIN1.pcx",
        area: "TZDMIN1.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBDNDW_5.def",
        x: 270,
        y: 253,
        z: -1,
        border: "TODMAN1.pcx",
        area: "TZDMAN1.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBDNDW_6.def",
        x: 550,
        y: 0,
        z: -1,
        border: "TODDRA1A.pcx",
        area: "TZDDRA1A.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBDNUP_0.def",
        x: 0,
        y: 300,
        z: 2,
        border: "TODTRG2A.pcx",
        area: "TZDTRG2A.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBDNUP_1.def",
        x: 0,
        y: 26,
        border: "TODHAR2.pcx",
        area: "TZDHAR2.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBDNUP_2.def",
        x: 118,
        y: 256,
        z: 1,
        border: "TODBEH2A.pcx",
        area: "TZDBEH2A.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBDNUP_3.def",
        x: 300,
        y: 29,
        z: -1,
        border: "TODMED2.pcx",
        area: "TZDMED2.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBDNUP_4.def",
        x: 519,
        y: 172,
        z: 1,
        border: "TODMIN2.pcx",
        area: "TZDMIN2.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBDNUP_5.def",
        x: 270,
        y: 253,
        z: -1,
        border: "TODMAN2.pcx",
        area: "TZDMAN2.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBDNUP_6.def",
        x: 550,
        y: 0,
        z: -1,
        border: "TODDRA2A.pcx",
        area: "TZDDRA2A.pcx"
      }
    },

    guildBackground: "TPMAGE.pcx",
    townBackground: "TBDNBACK.pcx",
    guildWindow: "TPMAGEDN.pcx",
    buildingsIcons: "HALLDUNG.DEF",
    hallBackground: "TPTHBKDG.BMP",
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
      [
        [Building.Special1],
        [Building.Special4],
        [Building.Horde1, "horde1Upgr"]
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

    buildings: {
      [Building.MageGuild1]: {},
      [Building.MageGuild2]: { upgrades: Building.MageGuild1 },
      [Building.MageGuild3]: { upgrades: Building.MageGuild2 },
      [Building.MageGuild4]: { upgrades: Building.MageGuild3 },
      [Building.MageGuild5]: { upgrades: Building.MageGuild4 },
      [Building.Tavern]: {},
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
      [Building.ResourceSilo]: { requires: [Building.Marketplace] },
      [Building.Blacksmith]: {},

      [Building.Special1]: { requires: [Building.Marketplace] },
      [Building.Horde1]: { upgrades: Building.Dwelling1 },
      horde1Upgr: {
        upgrades: Building.DwellingUp1,
        requires: [Building.Horde1],
        mode: "auto"
      },
      [Building.Special2]: { requires: [Building.MageGuild1] },
      [Building.Special3]: {},
      [Building.Special4]: {},
      [Building.Grail]: { mode: "grail", produce: { gold: 5000 } },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: { requires: [Building.Dwelling1] },
      [Building.Dwelling3]: { requires: [Building.Dwelling1] },
      [Building.Dwelling4]: {
        requires: [Building.Dwelling2, Building.Dwelling3]
      },
      [Building.Dwelling5]: { requires: [Building.Dwelling4] },
      [Building.Dwelling6]: { requires: [Building.Dwelling4] },
      [Building.Dwelling7]: {
        requires: [Building.MageGuild2, Building.Dwelling5, Building.Dwelling6]
      },

      [Building.DwellingUp1]: { upgrades: Building.Dwelling1 },
      [Building.DwellingUp2]: { upgrades: Building.Dwelling2 },
      [Building.DwellingUp3]: { upgrades: Building.Dwelling3 },
      [Building.DwellingUp4]: { upgrades: Building.Dwelling4 },
      [Building.DwellingUp5]: { upgrades: Building.Dwelling5 },
      [Building.DwellingUp6]: { upgrades: Building.Dwelling6 },
      [Building.DwellingUp7]: {
        upgrades: Building.Dwelling7,
        requires: [Building.MageGuild3]
      }
    }
  }
};
