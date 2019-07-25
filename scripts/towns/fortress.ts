import { Building, Creature, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASFOR",
    "130px": "CRBKGFOR"
  },
  town: {
    structures: {
      extraAnimation: { animation: "TBFREXT2.def", x: 372, y: 227 },
      [Building.MageGuild1]: {
        animation: "TBFRMAGE.def",
        x: 0,
        y: 200,
        z: -1,
        border: "TOFMAG1A.pcx",
        area: "TZFMAG1A.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBFRMAG2.def",
        x: 0,
        y: 177,
        z: -1,
        border: "TOFMAG2A.pcx",
        area: "TZFMAG2A.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBFRMAG3.def",
        x: 0,
        y: 135,
        z: -1,
        border: "TOFMAG3A.pcx",
        area: "TZFMAG3A.pcx"
      },
      [Building.Tavern]: {
        animation: "TBFRTVRN.def",
        x: 634,
        y: 219,
        z: 3,
        border: "TOFTAVA.pcx",
        area: "TZFTAVA.pcx"
      },
      [Building.Shipyard]: {
        animation: "TBFRDOCK.def",
        x: 197,
        y: 294,
        border: "TOFDCK2.pcx",
        area: "TZFDCK2.pcx"
      },
      [Building.Fort]: {
        animation: "TBFRCSTL.def",
        x: 368,
        y: 118,
        z: -1,
        border: "TOFCAS1.pcx",
        area: "TZFCAS1.pcx"
      },
      [Building.Citadel]: {
        animation: "TBFRCAS2.def",
        x: 368,
        y: 98,
        z: -1,
        border: "TOFCAS2.pcx",
        area: "TZFCAS2.pcx"
      },
      [Building.Castle]: {
        animation: "TBFRCAS3.def",
        x: 368,
        y: 55,
        z: -1,
        border: "TOFCAS3.pcx",
        area: "TZFCAS3.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBFRHALL.def",
        x: 166,
        y: 128,
        z: 1,
        border: "TOFHAL1.pcx",
        area: "TZFHAL1.pcx"
      },
      [Building.TownHall]: {
        animation: "TBFRHAL2.def",
        x: 166,
        y: 97,
        z: 1,
        border: "TOFHAL2.pcx",
        area: "TZFHAL2.pcx"
      },
      [Building.CityHall]: {
        animation: "TBFRHAL3.def",
        x: 166,
        y: 51,
        z: 1,
        border: "TOFHAL3.pcx",
        area: "TZFHAL3.pcx"
      },
      [Building.Capitol]: {
        animation: "TBFRHAL4.def",
        x: 166,
        y: 2,
        z: 1,
        border: "TOFHAL4.pcx",
        area: "TZFHAL4.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBFRMARK.def",
        x: 382,
        y: 219,
        z: 4,
        border: "TOFMRKAA.pcx",
        area: "TZFMRKAA.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBFRSILO.def",
        x: 448,
        y: 210,
        z: 2,
        border: "TOFMRK2A.pcx",
        area: "TZFMRK2A.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBFRBLAK.def",
        x: 360,
        y: 160,
        border: "TOFAIDA.pcx",
        area: "TZFAIDA.pcx"
      },
      [Building.Special1]: {
        animation: "TBFRSPEC.def",
        x: 703,
        y: 36,
        border: "TOFCAGE.pcx",
        area: "TZFCAGE.pcx"
      },
      [Building.Horde1]: {
        animation: "TBFRHRD1.def",
        x: 641,
        y: 121,
        z: 1,
        border: "TOFGNL1H.pcx",
        area: "TZFGNL1H.pcx",
        hidden: true
      },
      horde1Upgr: {
        animation: "TBFRHRD2.def",
        x: 641,
        y: 68,
        z: 1,
        border: "TOFGNL2H.pcx",
        area: "TZFGNL2H.pcx",
        hidden: true,
        builds: "horde1"
      },
      ship: {
        animation: "TBFRBOAT.def",
        x: 197,
        y: 294,
        z: 1,
        border: "TOFDCK1.pcx",
        area: "TZFDCK1.pcx",
        hidden: true
      },
      [Building.Special2]: {
        animation: "TBFREXT0.def",
        x: 341,
        y: 174,
        border: "TOFCASD.pcx",
        area: "TZFCASD.pcx"
      },
      [Building.Special3]: {
        animation: "TBFREXT1.def",
        x: 349,
        y: 79,
        z: -2,
        border: "TOFCASA.pcx",
        area: "TZFCASA.pcx"
      },
      [Building.Grail]: {
        animation: "TBFRHOLY.def",
        x: 468,
        y: 260,
        z: 5,
        border: "TOFHLYAA.pcx",
        area: "TZFHLYAA.pcx"
      },
      extraCapitol: { animation: "TBFRWTRW.def", x: 320, y: 141 },
      [Building.Dwelling1]: {
        animation: "TBFRDW_0.def",
        x: 641,
        y: 168,
        z: 1,
        border: "TOFGNL1.pcx",
        area: "TZFGNL1.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBFRDW_1.def",
        x: 141,
        y: 178,
        border: "TOFLIZ1.pcx",
        area: "TZFLIZ1.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBFRDW_3.def",
        x: 192,
        y: 85,
        border: "TOFFLY1A.pcx",
        area: "TZFFLY1A.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBFRDW_4.def",
        x: 0,
        y: 292,
        border: "TOFBAS1.pcx",
        area: "TZFBAS1.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBFRDW_2.def",
        x: 15,
        y: 127,
        z: -2,
        border: "TOFGOR1.pcx",
        area: "TZFGOR1.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBFRDW_5.def",
        x: 0,
        y: 4,
        border: "TOFWYV1.pcx",
        area: "TZFWYV1.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBFRDW_6.def",
        x: 612,
        y: 291,
        z: 5,
        border: "TOFHYD1A.pcx",
        area: "TZFHYD1A.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBFRUP_0.def",
        x: 641,
        y: 107,
        z: 1,
        border: "TOFGNL2.pcx",
        area: "TZFGNL2.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBFRUP_1.def",
        x: 125,
        y: 163,
        border: "TOFLIZ2.pcx",
        area: "TZFLIZ2.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBFRUP_3.def",
        x: 159,
        y: 19,
        border: "TOFFLY2A.pcx",
        area: "TZFFLY2A.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBFRUP_4.def",
        x: 0,
        y: 257,
        border: "TOFBAS2.pcx",
        area: "TZFBAS2.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBFRUP_2.def",
        x: 15,
        y: 69,
        z: -2,
        border: "TOFGOR2.pcx",
        area: "TZFGOR2.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBFRUP_5.def",
        x: 0,
        y: 4,
        border: "TOFWYV2.pcx",
        area: "TZFWYV2.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBFRUP_6.def",
        x: 587,
        y: 263,
        z: 5,
        border: "TOFHYD2A.pcx",
        area: "TZFHYD2A.pcx"
      }
    },

    musicTheme: "music/FortressTown",
    defaultTavern: 5,
    tavernVideo: "TAVERN.BIK",
    guildBackground: "TPMAGE.pcx",
    townBackground: "TBFRBACK.pcx",
    guildWindow: "TPMAGEFR.pcx",
    buildingsIcons: "HALLFORT.DEF",
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
        [Building.MageGuild1, Building.MageGuild2, Building.MageGuild3],
        [Building.Shipyard]
      ],
      [
        [Building.Special1],
        [Building.Special2, Building.Special3],
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
      [Creature.Gnoll, Creature.GnollMarauder],
      [Creature.Lizardman, Creature.LizardWarrior],
      [Creature.SerpentFly, Creature.DragonFly],
      [Creature.Basilisk, Creature.GreaterBasilisk],
      [Creature.Gorgon, Creature.MightyGorgon],
      [Creature.Wyvern, Creature.WyvernMonarch],
      [Creature.Hydra, Creature.ChaosHydra]
    ],
    warMachine: Artifact.FirstAidTent,
    buildings: {
      [Building.MageGuild1]: {},
      [Building.MageGuild2]: { upgrades: Building.MageGuild1 },
      [Building.MageGuild3]: { upgrades: Building.MageGuild2 },
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
        produce: { wood: 1, ore: 1 }
      },
      [Building.Blacksmith]: {},

      [Building.Special1]: {
        requires: [Building.TownHall, Building.Special2]
      },
      [Building.Horde1]: { upgrades: Building.Dwelling1 },
      horde1Upgr: {
        upgrades: Building.DwellingUp1,
        requires: [Building.Horde1],
        mode: "auto"
      },
      ship: { upgrades: Building.Shipyard },
      [Building.Special2]: { requires: [Building.Fort] },
      [Building.Special3]: { requires: [Building.Special2] },
      [Building.Grail]: { mode: "grail", produce: { gold: 5000 } },
      extraCapitol: { requires: [Building.Capitol], mode: "auto" },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: { requires: [Building.Dwelling1] },
      [Building.Dwelling3]: { requires: [Building.Dwelling1] },
      [Building.Dwelling4]: { requires: [Building.Dwelling3] },
      [Building.Dwelling5]: {
        requires: [Building.Dwelling2, Building.Dwelling3]
      },
      [Building.Dwelling6]: { requires: [Building.Dwelling2] },
      [Building.Dwelling7]: {
        requires: [Building.Dwelling4, Building.Dwelling6]
      },

      [Building.DwellingUp1]: {
        upgrades: Building.Dwelling1,
        requires: [Building.Tavern]
      },
      [Building.DwellingUp2]: { upgrades: Building.Dwelling2 },
      [Building.DwellingUp3]: { upgrades: Building.Dwelling3 },
      [Building.DwellingUp4]: { upgrades: Building.Dwelling4 },
      [Building.DwellingUp5]: {
        upgrades: Building.Dwelling5,
        requires: [Building.ResourceSilo]
      },
      [Building.DwellingUp6]: { upgrades: Building.Dwelling6 },
      [Building.DwellingUp7]: { upgrades: Building.Dwelling7 }
    }
  }
};
