import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASTOW",
    "130px": "CRBKGTOW"
  },
  town: {
    structures: {
      [Building.MageGuild1]: {
        animation: "TBTWMAGE.def",
        x: 597,
        y: 82,
        border: "TOTGLD1.pcx",
        area: "TZTGLD1.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBTWMAG2.def",
        x: 593,
        y: 65,
        border: "TOTGLD2.pcx",
        area: "TZTGLD2.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBTWMAG3.def",
        x: 593,
        y: 48,
        border: "TOTGLD3.pcx",
        area: "TZTGLD3.pcx"
      },
      [Building.MageGuild4]: {
        animation: "TBTWMAG4.def",
        x: 593,
        y: 31,
        border: "TOTGLD4.pcx",
        area: "TZTGLD4.pcx"
      },
      [Building.MageGuild5]: {
        animation: "TBTWMAG5.def",
        x: 593,
        y: 14,
        border: "TOTGLD5.pcx",
        area: "TZTGLD5.pcx"
      },
      [Building.Tavern]: {
        animation: "TBTWTVRN.def",
        x: 375,
        y: 278,
        z: 1,
        border: "TOTTAV.pcx",
        area: "TZTTAV.pcx"
      },
      [Building.Fort]: {
        animation: "TBTWCSTL.def",
        x: 304,
        y: 0,
        border: "TOTCAS1.pcx",
        area: "TZTCAS1.pcx"
      },
      [Building.Citadel]: {
        animation: "TBTWCAS2.def",
        x: 301,
        y: 0,
        border: "TOTCAS2.pcx",
        area: "TZTCAS2.pcx"
      },
      [Building.Castle]: {
        animation: "TBTWCAS3.def",
        x: 301,
        y: 0,
        border: "TOTCAS3.pcx",
        area: "TZTCAS3.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBTWHALL.def",
        x: 0,
        y: 259,
        z: 1,
        border: "TOTHAL1.pcx",
        area: "TZTHAL1.pcx"
      },
      [Building.TownHall]: {
        animation: "TBTWHAL2.def",
        x: 0,
        y: 220,
        z: 1,
        border: "TOTHAL2.pcx",
        area: "TZTHAL2.pcx"
      },
      [Building.CityHall]: {
        animation: "TBTWHAL3.def",
        x: 0,
        y: 82,
        z: 1,
        border: "TOTHAL3.pcx",
        area: "TZTHAL3.pcx"
      },
      [Building.Capitol]: {
        animation: "TBTWHAL4.def",
        x: 0,
        y: 82,
        z: 1,
        border: "TOTHAL4.pcx",
        area: "TZTHAL4.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBTWMARK.def",
        x: 614,
        y: 292,
        border: "TOTMRK.pcx",
        area: "TZTMRK.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBTWSILO.def",
        x: 763,
        y: 214,
        z: 3,
        border: "TOTMRKS.pcx",
        area: "TZTMRKS.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBTWBLAK.def",
        x: 478,
        y: 211,
        border: "TOTBLKA.pcx",
        area: "TZTBLKA.pcx"
      },
      [Building.Special1]: {
        animation: "TBTWSPEC.def",
        x: 674,
        y: 276,
        z: 2,
        border: "TOTMRKA.pcx",
        area: "TZTMRKA.pcx"
      },
      [Building.Horde2]: {
        animation: "TBTWHRD1.def",
        x: 0,
        y: 47,
        border: "TOTGAR1H.pcx",
        area: "TZTGAR1H.pcx",
        hidden: true
      },
      horde2Upgr: {
        animation: "TBTWHRD2.def",
        x: 0,
        y: 28,
        border: "TOTGAR2H.pcx",
        area: "TZTGAR2H.pcx",
        hidden: true,
        builds: "horde2"
      },
      [Building.Special2]: {
        animation: "TBTWEXT0.def",
        x: 409,
        y: 82,
        border: "TOTCASW.pcx",
        area: "TZTCASW.pcx"
      },
      [Building.Special3]: {
        animation: "TBTWEXT1.def",
        x: 702,
        y: 115,
        border: "TOTGLDL.pcx",
        area: "TZTGLDL.pcx"
      },
      [Building.Special4]: {
        animation: "TBTWEXT2.def",
        x: 592,
        y: 189,
        z: 1,
        border: "TOTGLDW.pcx",
        area: "TZTGLDW.pcx"
      },
      [Building.Grail]: {
        animation: "TBTWHOLY.def",
        x: 237,
        y: 14,
        z: -1,
        border: "TOTHOLYA.pcx",
        area: "TZTHOLYA.pcx"
      },
      [Building.Dwelling1]: {
        animation: "TBTWDW_0.def",
        x: 453,
        y: 221,
        z: 1,
        border: "TOTGRM1A.pcx",
        area: "TZTGRM1A.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBTWDW_1.def",
        x: 4,
        y: 46,
        border: "TOTGAR1.pcx",
        area: "TZTGAR1.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBTWDW_2.def",
        x: 209,
        y: 177,
        z: 1,
        border: "TOTGOL1A.pcx",
        area: "TZTGOL1A.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBTWDW_3.def",
        x: 613,
        y: 95,
        border: "TOTMAG1.pcx",
        area: "TZTMAG1.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBTWDW_4.def",
        x: 511,
        y: 75,
        border: "TOTGEN1.pcx",
        area: "TZTGEN1.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBTWDW_5.def",
        x: 681,
        y: 208,
        z: 2,
        border: "TOTNAG1.pcx",
        area: "TZTNAG1.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBTWDW_6.def",
        x: 75,
        y: 144,
        z: -1,
        border: "TOTTIT1.pcx",
        area: "TZTTIT1.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBTWUP_0.def",
        x: 446,
        y: 221,
        z: 1,
        border: "TOTGRM2A.pcx",
        area: "TZTGRM2A.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBTWUP_1.def",
        x: 4,
        y: 28,
        border: "TOTGAR2.pcx",
        area: "TZTGAR2.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBTWUP_2.def",
        x: 209,
        y: 177,
        z: 1,
        border: "TOTGOL2A.pcx",
        area: "TZTGOL2A.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBTWUP_3.def",
        x: 613,
        y: 74,
        border: "TOTMAG2.pcx",
        area: "TZTMAG2.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBTWUP_4.def",
        x: 511,
        y: 8,
        border: "TOTGEN2.pcx",
        area: "TZTGEN2.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBTWUP_5.def",
        x: 681,
        y: 157,
        z: 2,
        border: "TOTNAG2.pcx",
        area: "TZTNAG2.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBTWUP_6.def",
        x: 75,
        y: 91,
        z: -1,
        border: "TOTTIT2.pcx",
        area: "TZTTIT2.pcx"
      }
    },

    guildBackground: "TPMAGE.pcx",
    townBackground: "TBTWBACK.pcx",
    guildWindow: "TPMAGETW.pcx",
    buildingsIcons: "HALLTOWR.DEF",
    hallBackground: "TPTHBKTW.BMP",
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
        [Building.Special3],
        [Building.Special4]
      ],
      [
        [Building.Special1],
        [Building.Special2],
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
      [Creature.Gremlin, Creature.MasterGremlin],
      [Creature.StoneGargoyle, Creature.ObsidianGargoyle],
      [Creature.IronGolem, Creature.StoneGolem],
      [Creature.Mage, Creature.ArchMage],
      [Creature.Genie, Creature.MasterGenie],
      [Creature.Naga, Creature.NagaQueen],
      [Creature.Giant, Creature.Titan]
    ],
    primaryResource: Resource.Gems,
    warMachine: Artifact.AmmoCart,

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
        produce: { gems: 1 }
      },
      [Building.Blacksmith]: {},

      [Building.Special1]: { requires: [Building.Marketplace] },
      [Building.Horde2]: { upgrades: Building.Dwelling2 },
      horde2Upgr: {
        upgrades: Building.DwellingUp2,
        requires: [Building.Horde2],
        mode: "auto"
      },
      [Building.Special2]: { requires: [Building.Fort] },
      [Building.Special3]: { requires: [Building.MageGuild1] },
      [Building.Special4]: { requires: [Building.MageGuild1] },
      [Building.Grail]: { mode: "grail", produce: { gold: 5000 } },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: { requires: [Building.Dwelling1] },
      [Building.Dwelling3]: { requires: [Building.Dwelling1] },
      [Building.Dwelling4]: {
        requires: [Building.MageGuild1, Building.Dwelling2, Building.Dwelling3]
      },
      [Building.Dwelling5]: { requires: [Building.Dwelling4] },
      [Building.Dwelling6]: { requires: [Building.Dwelling4] },
      [Building.Dwelling7]: {
        requires: [Building.Dwelling5, Building.Dwelling6]
      },

      [Building.DwellingUp1]: { upgrades: Building.Dwelling1 },
      [Building.DwellingUp2]: { upgrades: Building.Dwelling2 },
      [Building.DwellingUp3]: { upgrades: Building.Dwelling3 },
      [Building.DwellingUp4]: {
        upgrades: Building.Dwelling4,
        requires: [Building.Special3]
      },
      [Building.DwellingUp5]: { upgrades: Building.Dwelling5 },
      [Building.DwellingUp6]: { upgrades: Building.Dwelling6 },
      [Building.DwellingUp7]: { upgrades: Building.Dwelling7 }
    }
  }
};
