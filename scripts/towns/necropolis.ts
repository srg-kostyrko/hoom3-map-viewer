import { Building, Creature, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASNEC",
    "130px": "CRBKGNEC"
  },
  town: {
    structures: {
      extraAnimation: { animation: "TBNCEXT2.def", x: 25, y: 279 },
      [Building.MageGuild1]: {
        animation: "TBNCMAGE.def",
        x: 341,
        y: 116,
        z: -1,
        border: "TONMAG1.pcx",
        area: "TZNMAG1.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBNCMAG2.def",
        x: 341,
        y: 97,
        z: -1,
        border: "TONMAG2.pcx",
        area: "TZNMAG2.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBNCMAG3.def",
        x: 341,
        y: 78,
        z: -1,
        border: "TONMAG3.pcx",
        area: "TZNMAG3.pcx"
      },
      [Building.MageGuild4]: {
        animation: "TBNCMAG4.def",
        x: 340,
        y: 62,
        z: -1,
        border: "TONMAG4.pcx",
        area: "TZNMAG4.pcx"
      },
      [Building.MageGuild5]: {
        animation: "TBNCMAG5.def",
        x: 343,
        y: 35,
        z: -1,
        border: "TONMAG5.pcx",
        area: "TZNMAG5.pcx"
      },
      [Building.Tavern]: {
        animation: "TBNCTVRN.def",
        x: 508,
        y: 189,
        border: "TONTAV.pcx",
        area: "TZNTAV.pcx"
      },
      [Building.Shipyard]: {
        animation: "TBNCDOCK.def",
        x: 617,
        y: 265,
        z: -2,
        border: "TONSHPBA.pcx",
        area: "TZNSHPBA.pcx"
      },
      [Building.Fort]: {
        animation: "TBNCCSTL.def",
        x: 138,
        y: 66,
        border: "TONCAS1.pcx",
        area: "TZNCAS1.pcx"
      },
      [Building.Citadel]: {
        animation: "TBNCCAS2.def",
        x: 139,
        y: 66,
        border: "TONCAS2.pcx",
        area: "TZNCAS2.pcx"
      },
      [Building.Castle]: {
        animation: "TBNCCAS3.def",
        x: 34,
        y: 18,
        border: "TONCAS3.pcx",
        area: "TZNCAS3.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBNCHALL.def",
        x: 468,
        y: 76,
        z: -1,
        border: "TONHAL1.pcx",
        area: "TZNHAL1.pcx"
      },
      [Building.TownHall]: {
        animation: "TBNCHAL2.def",
        x: 482,
        y: 56,
        z: -1,
        border: "TONHAL2.pcx",
        area: "TZNHAL2.pcx"
      },
      [Building.CityHall]: {
        animation: "TBNCHAL3.def",
        x: 478,
        y: 26,
        z: -1,
        border: "TONHAL3.pcx",
        area: "TZNHAL3.pcx"
      },
      [Building.Capitol]: {
        animation: "TBNCHAL4.def",
        x: 481,
        y: 26,
        z: -1,
        border: "TONHAL4.pcx",
        area: "TZNHAL4.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBNCMARK.def",
        x: 347,
        y: 215,
        z: 2,
        border: "TONMRK1.pcx",
        area: "TZNMRK1.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBNCSILO.def",
        x: 276,
        y: 185,
        z: 1,
        border: "TONMRK2.pcx",
        area: "TZNMRK2.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBNCBLAK.def",
        x: 382,
        y: 252,
        z: 4,
        border: "TONSMITA.pcx",
        area: "TZNSMITA.pcx"
      },
      [Building.Special1]: {
        animation: "TBNCSPEC.def",
        x: 18,
        y: 0,
        z: -1,
        border: "TONSHRDA.pcx",
        area: "TZNSHRDA.pcx"
      },
      [Building.Horde1]: {
        animation: "TBNCHRD1.def",
        x: 80,
        y: 222,
        z: 4,
        border: "TONSKE1H.pcx",
        area: "TZNSKE1H.pcx",
        hidden: true
      },
      horde1Upgr: {
        animation: "TBNCHRD2.def",
        x: 64,
        y: 222,
        z: 4,
        border: "TONSKE2H.pcx",
        area: "TZNSKE2H.pcx",
        hidden: true,
        builds: "horde1"
      },
      ship: {
        animation: "TBNCBOAT.def",
        x: 617,
        y: 265,
        z: -2,
        border: "TONSHPNA.pcx",
        area: "TZNSHPNA.pcx",
        hidden: true
      },
      [Building.Special2]: {
        animation: "TBNCEXT0.def",
        x: 307,
        y: 61,
        z: -2,
        border: "TONNECRA.pcx",
        area: "TZNNECRA.pcx"
      },
      [Building.Special3]: {
        animation: "TBNCEXT1.def",
        x: 247,
        y: 275,
        z: 4,
        border: "TONSKELT.pcx",
        area: "TZNSKELT.pcx"
      },
      [Building.Grail]: {
        animation: "TBNCHOLY.def",
        x: 410,
        y: 88,
        border: "TONHOLYA.pcx",
        area: "TZNHOLYA.pcx"
      },
      extraTownHall: { animation: "TBNCEXT3.def", x: 0, y: 241 },
      extraCityHall: { animation: "TBNCEXT4.def", x: 321, y: 255 },
      extraCapitol: { animation: "TBNCEXT5.def", x: 475, y: 257 },
      [Building.Dwelling1]: {
        animation: "TBNCDW_0.def",
        x: 80,
        y: 222,
        z: 4,
        border: "TONSKEL1.pcx",
        area: "TZNSKEL1.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBNCDW_1.def",
        x: 502,
        y: 223,
        border: "TONZOMB1.pcx",
        area: "TZNZOMB1.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBNCDW_2.def",
        x: 0,
        y: 187,
        z: 2,
        border: "TONWIGH1.pcx",
        area: "TZNWIGH1.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBNCDW_3.def",
        x: 607,
        y: 212,
        z: 2,
        border: "TONVAM1.pcx",
        area: "TZNVAM1.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBNCDW_4.def",
        x: 206,
        y: 207,
        z: 3,
        border: "TONLICH1.pcx",
        area: "TZNLICH1.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBNCDW_5.def",
        x: 0,
        y: 31,
        border: "TONBKN1.pcx",
        area: "TZNBKN1.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBNCDW_6.def",
        x: 663,
        y: 25,
        border: "TONBON1.pcx",
        area: "TZNBON1.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBNCUP_0.def",
        x: 64,
        y: 222,
        z: 4,
        border: "TONSKEL2.pcx",
        area: "TZNSKEL2.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBNCUP_1.def",
        x: 498,
        y: 224,
        border: "TONZOMB2.pcx",
        area: "TZNZOMB2.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBNCUP_2.def",
        x: 0,
        y: 179,
        z: 2,
        border: "TONWIGH2.pcx",
        area: "TZNWIGH2.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBNCUP_3.def",
        x: 615,
        y: 193,
        z: 2,
        border: "TONVAM2.pcx",
        area: "TZNVAM2.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBNCUP_4.def",
        x: 222,
        y: 171,
        z: 3,
        border: "TONLICH2.pcx",
        area: "TZNLICH2.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBNCUP_5.def",
        x: 0,
        y: 30,
        border: "TONBKN2.pcx",
        area: "TZNBKN2.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBNCUP_6.def",
        x: 662,
        y: 23,
        border: "TONBON2.pcx",
        area: "TZNBON2.pcx"
      }
    },

    guildBackground: "TPMAGE.pcx",
    townBackground: "TBNCBACK.pcx",
    guildWindow: "TPMAGENC.pcx",
    buildingsIcons: "HALLNECR.DEF",
    hallBackground: "TPTHBKNC.BMP",
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
      [
        [Building.Special1],
        [Building.Special3],
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
      [Creature.Skeleton, Creature.SkeletonWarrior],
      [Creature.WalkingDead, Creature.Zombie],
      [Creature.Wight, Creature.Wraith],
      [Creature.Vampire, Creature.VampireLord],
      [Creature.Lich, Creature.PowerLich],
      [Creature.BlackKnight, Creature.DreadKnight],
      [Creature.BoneDragon, Creature.GhostDragon]
    ],
    warMachine: Artifact.FirstAidTent,

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
        require: [Building.Tavern],
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

      [Building.Special1]: { requires: [Building.Fort] },
      [Building.Horde1]: {
        upgrades: Building.Dwelling1,
        requires: [Building.Special3]
      },
      horde1Upgr: {
        upgrades: Building.DwellingUp1,
        requires: [Building.Horde1],
        mode: "auto"
      },
      ship: { upgrades: Building.Shipyard },
      [Building.Special2]: { requires: [Building.MageGuild1] },
      [Building.Special3]: { requires: [Building.Dwelling1] },
      [Building.Grail]: { mode: "grail", produce: { gold: 5000 } },
      extraTownHall: { requires: [Building.TownHall], mode: "auto" },
      extraCityHall: { requires: [Building.CityHall], mode: "auto" },
      extraCapitol: { requires: [Building.Capitol], mode: "auto" },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: { requires: [Building.Dwelling1] },
      [Building.Dwelling3]: { requires: [Building.Dwelling1] },
      [Building.Dwelling4]: { requires: [Building.Dwelling2] },
      [Building.Dwelling5]: {
        requires: [Building.MageGuild1, Building.Dwelling2]
      },
      [Building.Dwelling6]: {
        requires: [Building.Dwelling4, Building.Dwelling5]
      },
      [Building.Dwelling7]: { requires: [Building.Dwelling6] },

      [Building.DwellingUp1]: { upgrades: Building.Dwelling1 },
      [Building.DwellingUp2]: { upgrades: Building.Dwelling2 },
      [Building.DwellingUp3]: { upgrades: Building.Dwelling3 },
      [Building.DwellingUp4]: {
        upgrades: Building.Dwelling4,
        requires: [Building.Special2]
      },
      [Building.DwellingUp5]: { upgrades: Building.Dwelling5 },
      [Building.DwellingUp6]: { upgrades: Building.Dwelling6 },
      [Building.DwellingUp7]: { upgrades: Building.Dwelling7 }
    }
  }
};
