import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASRAM",
    "130px": "CRBKGRAM"
  },
  town: {
    structures: {
      extraAnimation: { animation: "TBRMEXT2.def", x: 327, y: 236 },
      [Building.MageGuild1]: {
        animation: "TBRMMAGE.def",
        x: 454,
        y: 200,
        z: -1,
        border: "TORMAG1.pcx",
        area: "TZRMAG1.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBRMMAG2.def",
        x: 438,
        y: 178,
        z: -1,
        border: "TORMAG2.pcx",
        area: "TZRMAG2.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBRMMAG3.def",
        x: 418,
        y: 153,
        z: -1,
        border: "TORMAG3.pcx",
        area: "TZRMAG3.pcx"
      },
      [Building.MageGuild4]: {
        animation: "TBRMMAG4.def",
        x: 406,
        y: 129,
        z: -1,
        border: "TORMAG4.pcx",
        area: "TZRMAG4.pcx"
      },
      [Building.MageGuild5]: {
        animation: "TBRMMAG5.def",
        x: 384,
        y: 104,
        z: -1,
        border: "TORMAG5.pcx",
        area: "TZRMAG5.pcx"
      },
      [Building.Tavern]: {
        animation: "TBRMTVRN.def",
        x: 181,
        y: 229,
        z: 1,
        border: "TORTAV.pcx",
        area: "TZRTAV.pcx"
      },
      [Building.Fort]: {
        animation: "TBRMCSTL.def",
        x: 63,
        y: 25,
        z: -2,
        border: "TORCAS1.pcx",
        area: "TZRCAS1.pcx"
      },
      [Building.Citadel]: {
        animation: "TBRMCAS2.def",
        x: 79,
        y: 18,
        z: -2,
        border: "TORCAS3.pcx",
        area: "TZRCAS3.pcx"
      },
      [Building.Castle]: {
        animation: "TBRMCAS3.def",
        x: 79,
        y: 18,
        z: -2,
        border: "TORCAS2.pcx",
        area: "TZRCAS2.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBRMHALL.def",
        x: 565,
        y: 216,
        border: "TORHAL1.pcx",
        area: "TZRHAL1.pcx"
      },
      [Building.TownHall]: {
        animation: "TBRMHAL2.def",
        x: 538,
        y: 187,
        border: "TORHAL2.pcx",
        area: "TZRHAL2.pcx"
      },
      [Building.CityHall]: {
        animation: "TBRMHAL3.def",
        x: 538,
        y: 187,
        border: "TORHAL3.pcx",
        area: "TZRHAL3.pcx"
      },
      [Building.Capitol]: {
        animation: "TBRMHAL4.def",
        x: 534,
        y: 187,
        border: "TORHAL4.pcx",
        area: "TZRHAL4.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBRMMARK.def",
        x: 129,
        y: 301,
        z: 3,
        border: "TORMRK1.pcx",
        area: "TZRMRK1.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBRMSILO.def",
        x: 245,
        y: 324,
        z: 4,
        border: "TORMRK2.pcx",
        area: "TZRMRK2.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBRMBLAK.def",
        x: 558,
        y: 105,
        z: -3,
        border: "TORAID.pcx",
        area: "TZRAID.pcx"
      },
      [Building.Special1]: {
        animation: "TBRMSPEC.def",
        x: 555,
        y: 297,
        border: "TORGAR1A.pcx",
        area: "TZRGAR1A.pcx"
      },
      [Building.Horde2]: {
        animation: "TBRMHRD1.def",
        x: 0,
        y: 154,
        border: "TORDWF1H.pcx",
        area: "TZRDWF1H.pcx",
        hidden: true
      },
      horde2Upgr: {
        animation: "TBRMHRD2.def",
        x: 0,
        y: 143,
        border: "TORDWF2H.pcx",
        area: "TZRDWF2H.pcx",
        hidden: true,
        builds: "horde2"
      },
      [Building.Special2]: {
        animation: "TBRMEXT0.def",
        x: 555,
        y: 297,
        z: 2,
        border: "TORGAR2A.pcx",
        area: "TZRGAR2A.pcx"
      },
      [Building.Special3]: {
        animation: "TBRMEXT1.def",
        x: 0,
        y: 181,
        z: 1,
        border: "TORDWFT.pcx",
        area: "TZRDWFT.pcx"
      },
      [Building.Horde5]: {
        animation: "TBRMHRD3.def",
        x: 47,
        y: 142,
        z: -1,
        border: "TORTRE1H.pcx",
        area: "TZRTRE1H.pcx",
        hidden: true
      },
      horde5Upgr: {
        animation: "TBRMHRD4.def",
        x: 47,
        y: 142,
        z: -1,
        border: "TORTRE2H.pcx",
        area: "TZRTRE2H.pcx",
        hidden: true,
        builds: "horde5"
      },
      [Building.Grail]: {
        animation: "TBRMHOLY.def",
        x: 0,
        y: 54,
        z: -1,
        border: "TORHOLY.pcx",
        area: "TZRHOLY.pcx"
      },
      extraTownHall: { animation: "TBRMEXT3.def", x: 293, y: 235 },
      extraCityHall: { animation: "TBRMEXT4.def", x: 295, y: 191 },
      extraCapitol: { animation: "TBRMEXT5.def", x: 260, y: 171 },
      [Building.Dwelling1]: {
        animation: "TBRMDW_0.def",
        x: 0,
        y: 236,
        z: 2,
        border: "TORCEN1A.pcx",
        area: "TZRCEN1A.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBRMDW_1.def",
        x: 0,
        y: 154,
        border: "TORDWF1.pcx",
        area: "TZRDWF1.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBRMDW_2.def",
        x: 668,
        y: 101,
        border: "TORELF1.pcx",
        area: "TZRELF1.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBRMDW_3.def",
        x: 287,
        y: 73,
        z: -1,
        border: "TORPEG1A.pcx",
        area: "TZRPEG1A.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBRMDW_4.def",
        x: 68,
        y: 146,
        z: -1,
        border: "TORTRE1.pcx",
        area: "TZRTRE1.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBRMDW_5.def",
        x: 362,
        y: 90,
        z: -2,
        border: "TORUNI1.pcx",
        area: "TZRUNI1.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBRMDW_6.def",
        x: 502,
        y: 27,
        z: -5,
        border: "TORDR1AA.pcx",
        area: "TZRDR1AA.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBRMUP_0.def",
        x: 0,
        y: 236,
        z: 2,
        border: "TORCEN2A.pcx",
        area: "TZRCEN2A.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBRMUP_1.def",
        x: 0,
        y: 143,
        border: "TORDWF2.pcx",
        area: "TZRDWF2.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBRMUP_2.def",
        x: 665,
        y: 101,
        border: "TORELF2.pcx",
        area: "TZRELF2.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBRMUP_3.def",
        x: 287,
        y: 28,
        z: -1,
        border: "TORPEG2A.pcx",
        area: "TZRPEG2A.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBRMUP_4.def",
        x: 63,
        y: 146,
        z: -1,
        border: "TORTRE2.pcx",
        area: "TZRTRE2.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBRMUP_5.def",
        x: 362,
        y: 90,
        z: -2,
        border: "TORUNI2.pcx",
        area: "TZRUNI2.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBRMUP_6.def",
        x: 502,
        y: 5,
        z: -5,
        border: "TORDR2AA.pcx",
        area: "TZRDR2AA.pcx"
      }
    },

    guildBackground: "TPMAGE.pcx",
    townBackground: "TBRMBACK.pcx",
    guildWindow: "TPMAGERM.pcx",
    buildingsIcons: "HALLRAMP.DEF",
    hallBackground: "TPTHBKRM.BMP",
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
      [
        [Building.Special3],
        [Building.Horde5, "horde5Upgr"],
        [Building.Horde2, "horde2Upgr"]
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
      [Building.ResourceSilo]: {
        requires: [Building.Marketplace],
        produce: { crystal: 1 }
      },
      [Building.Blacksmith]: {},

      [Building.Special1]: {},
      [Building.Horde2]: { upgrades: Building.Dwelling2 },
      horde2Upgr: {
        upgrades: Building.DwellingUp2,
        requires: [Building.Horde2],
        mode: "auto"
      },
      [Building.Special2]: { requires: [Building.Special1] },
      [Building.Special3]: { requires: [Building.Horde2] },
      [Building.Horde5]: { upgrades: Building.Dwelling5 },
      horde5Upgr: {
        upgrades: Building.DwellingUp5,
        requires: [Building.Horde5],
        mode: "auto"
      },
      [Building.Grail]: { mode: "grail", produce: { gold: 5000 } },
      extraTownHall: { requires: [Building.TownHall], mode: "auto" },
      extraCityHall: { requires: [Building.CityHall], mode: "auto" },
      extraCapitol: { requires: [Building.Capitol], mode: "auto" },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: { requires: [Building.Dwelling1] },
      [Building.Dwelling3]: { requires: [Building.Dwelling1] },
      [Building.Dwelling4]: { requires: [Building.Dwelling3] },
      [Building.Dwelling5]: { requires: [Building.Dwelling3] },
      [Building.Dwelling6]: {
        requires: [Building.Dwelling3, Building.Dwelling4]
      },
      [Building.Dwelling7]: {
        requires: [Building.Dwelling6, Building.MageGuild2]
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
