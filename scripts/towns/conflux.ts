import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASELE",
    "130px": "CRBKGELE"
  },
  town: {
    structures: {
      extraAnimation2: {
        animation: "TBELEXT5.def",
        x: 682,
        y: 183,
        z: -1
      },
      extraAnimation: { animation: "TBELEXT1.def", x: 23, y: 218 },
      [Building.MageGuild1]: {
        animation: "TBELMAGE.def",
        x: 206,
        y: 58,
        z: 4,
        border: "TOELMAGE.pcx",
        area: "TZELMAGE.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBELMAG2.def",
        x: 206,
        y: 58,
        z: 4,
        border: "TOELMAG2.pcx",
        area: "TZELMAG2.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBELMAG3.def",
        x: 206,
        y: 58,
        z: 4,
        border: "TOELMAG3.pcx",
        area: "TZELMAG3.pcx"
      },
      [Building.MageGuild4]: {
        animation: "TBELMAG4.def",
        x: 206,
        y: 58,
        z: 4,
        border: "TOELMAG4.pcx",
        area: "TZELMAG4.pcx"
      },
      [Building.MageGuild5]: {
        animation: "TBELMAG5.def",
        x: 206,
        y: 58,
        z: 4,
        border: "TOELMAG5.pcx",
        area: "TZELMAG5.pcx"
      },
      [Building.Tavern]: {
        animation: "TBELTVRN.def",
        x: 553,
        y: 203,
        z: 1,
        border: "TOELTVRN.pcx",
        area: "TZELTVRN.pcx"
      },
      [Building.Shipyard]: {
        animation: "TBELDOCK.def",
        x: 239,
        y: 215,
        z: 2,
        border: "TOELDOCK.pcx",
        area: "TZELDOCK.pcx"
      },
      [Building.Fort]: {
        animation: "TBELCSTL.def",
        x: 349,
        y: 101,
        z: -1,
        border: "TOELCSTL.pcx",
        area: "TZELCSTL.pcx"
      },
      [Building.Citadel]: {
        animation: "TBELCAS2.def",
        x: 349,
        y: 101,
        z: -1,
        border: "TOELCAS2.pcx",
        area: "TZELCAS2.pcx"
      },
      [Building.Castle]: {
        animation: "TBELCAS3.def",
        x: 349,
        y: 101,
        z: -1,
        border: "TOELCAS3.pcx",
        area: "TZELCAS3.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBELHALL.def",
        x: -1,
        y: 164,
        z: 5,
        border: "TOELHALL.pcx",
        area: "TZELHALL.pcx"
      },
      [Building.TownHall]: {
        animation: "TBELHAL2.def",
        x: 0,
        y: 165,
        z: 5,
        border: "TOELHAL2.pcx",
        area: "TZELHAL2.pcx"
      },
      [Building.CityHall]: {
        animation: "TBELHAL3.def",
        x: 0,
        y: 165,
        z: 5,
        border: "TOELHAL3.pcx",
        area: "TZELHAL3.pcx"
      },
      [Building.Capitol]: {
        animation: "TBELHAL4.def",
        x: 0,
        y: 164,
        z: 5,
        border: "TOELHAL4.pcx",
        area: "TZELHAL4.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBELMARK.def",
        x: 347,
        y: 216,
        z: 4,
        border: "TOELMARK.pcx",
        area: "TZELMARK.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBELSILO.def",
        x: 372,
        y: 171,
        z: 2,
        border: "TOELSILO.pcx",
        area: "TZELSILO.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBELBLAK.def",
        x: 449,
        y: 151,
        z: 1,
        border: "TOELBLAK.pcx",
        area: "TZELBLAK.pcx"
      },
      [Building.Special1]: {
        animation: "TBELSPEC.def",
        x: 284,
        y: 246,
        z: 4,
        border: "TOELSPEC.pcx",
        area: "TZELSPEC.pcx"
      },
      [Building.Horde1]: {
        animation: "TBELHRD1.def",
        x: 689,
        y: 250,
        border: "TOELHRD1.pcx",
        area: "TZELHRD1.pcx",
        hidden: true
      },
      horde1Upgr: {
        animation: "TBELHRD2.def",
        x: 689,
        y: 250,
        border: "TOELHRD2.pcx",
        area: "TZELHRD2.pcx",
        hidden: true,
        builds: "horde1"
      },
      ship: {
        animation: "TBELBOAT.def",
        x: 239,
        y: 215,
        z: 2,
        border: "TOELBOAT.pcx",
        area: "TZELBOAT.pcx",
        hidden: true
      },
      [Building.Special2]: {
        animation: "TBELEXT6.def",
        x: 104,
        y: 170,
        z: 3,
        border: "TOELEXT6.pcx",
        area: "TZELEXT6.pcx"
      },
      [Building.Grail]: {
        animation: "TBELHOLY.def",
        x: 307,
        y: 2,
        border: "TOELHOLY.pcx",
        area: "TZELHOLY.pcx"
      },
      extraTownHall: { animation: "TBELEXT2.def", x: 232, y: 205 },
      extraCityHall: {
        animation: "TBELEXT3.def",
        x: 516,
        y: 223,
        z: 1
      },
      extraCapitol: { animation: "TBELEXT4.def", x: 0, y: 252, z: 6 },
      [Building.Dwelling1]: {
        animation: "TBELDW_0.def",
        x: 689,
        y: 250,
        border: "TOELDW_0.pcx",
        area: "TZELDW_0.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBELDW_1.def",
        x: 630,
        y: 50,
        border: "TOELDW_1.pcx",
        area: "TZELDW_1.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBELDW_2.def",
        x: 709,
        y: 210,
        z: -1,
        border: "TOELDW_2.pcx",
        area: "TZELDW_2.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBELDW_3.def",
        x: 108,
        y: 131,
        z: -1,
        border: "TOELDW_3.pcx",
        area: "TZELDW_3.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBELDW_4.def",
        x: 264,
        y: 168,
        z: -1,
        border: "TOELDW_4.pcx",
        area: "TZELDW_4.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBELDW_5.def",
        x: 394,
        y: 283,
        z: 2,
        border: "TOELDW_5.pcx",
        area: "TZELDW_5.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBELDW_6.def",
        x: 43,
        y: 16,
        z: -2,
        border: "TOELDW_6.pcx",
        area: "TZELDW_6.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBELUP_0.def",
        x: 689,
        y: 250,
        border: "TOELUP_0.pcx",
        area: "TZELUP_0.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBELUP_1.def",
        x: 630,
        y: 50,
        border: "TOELUP_1.pcx",
        area: "TZELUP_1.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBELUP_2.def",
        x: 709,
        y: 210,
        z: -1,
        border: "TOELUP_2.pcx",
        area: "TZELUP_2.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBELUP_3.def",
        x: 108,
        y: 131,
        z: -1,
        border: "TOELUP_3.pcx",
        area: "TZELUP_3.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBELUP_4.def",
        x: 264,
        y: 168,
        z: -1,
        border: "TOELUP_4.pcx",
        area: "TZELUP_4.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBELUP_5.def",
        x: 394,
        y: 283,
        z: 2,
        border: "TOELUP_5.pcx",
        area: "TZELUP_5.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBELUP_6.def",
        x: 43,
        y: 0,
        z: -2,
        border: "TOELUP_6.pcx",
        area: "TZELUP_6.pcx"
      }
    },

    guildBackground: "TPMAGE.pcx",
    townBackground: "TBELBACK.pcx",
    guildWindow: "TPMAGEEL.pcx",
    buildingsIcons: "HALLELEM.DEF",
    hallBackground: "TPTHBKFR.BMP",
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
      [
        [Building.Special2],
        [Building.Special1],
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

    buildings: {
      [Building.MageGuild1]: {},
      [Building.MageGuild2]: { upgrades: Building.MageGuild1 },
      [Building.MageGuild3]: { upgrades: Building.MageGuild2 },
      [Building.MageGuild4]: { upgrades: Building.MageGuild3 },
      [Building.MageGuild5]: { upgrades: Building.MageGuild4 },
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
        produce: { mercury: 1 }
      },
      [Building.Blacksmith]: {},

      [Building.Special1]: { requires: [Building.Marketplace] },
      [Building.Horde1]: { upgrades: Building.Dwelling1 },
      horde1Upgr: {
        upgrades: Building.DwellingUp1,
        requires: [Building.Horde1],
        mode: "auto"
      },
      ship: { upgrades: Building.Shipyard },
      [Building.Special2]: { requires: [Building.MageGuild1] },
      [Building.Grail]: {
        mode: Building.Grail,
        produce: { gold: 5000 }
      },
      extraTownHall: { requires: [Building.TownHall], mode: "auto" },
      extraCityHall: { requires: [Building.CityHall], mode: "auto" },
      extraCapitol: { requires: [Building.Capitol], mode: "auto" },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: {
        requires: [Building.Dwelling1, Building.MageGuild1]
      },
      [Building.Dwelling3]: {
        requires: [Building.Dwelling1, Building.MageGuild1]
      },
      [Building.Dwelling4]: { requires: [Building.Dwelling2] },
      [Building.Dwelling5]: { requires: [Building.Dwelling3] },
      [Building.Dwelling6]: {
        requires: [Building.Dwelling4, Building.Dwelling5]
      },
      [Building.Dwelling7]: { requires: [Building.Dwelling6] },

      [Building.DwellingUp1]: { upgrades: Building.Dwelling1 },
      [Building.DwellingUp2]: { upgrades: Building.Dwelling2 },
      [Building.DwellingUp3]: { upgrades: Building.Dwelling3 },
      [Building.DwellingUp4]: {
        upgrades: Building.Dwelling4,
        requires: [Building.Dwelling2]
      },
      [Building.DwellingUp5]: { upgrades: Building.Dwelling5 },
      [Building.DwellingUp6]: {
        upgrades: Building.Dwelling6,
        requires: [Building.MageGuild2]
      },
      [Building.DwellingUp7]: { upgrades: Building.Dwelling7 }
    }
  }
};
