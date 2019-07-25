import { Building, Creature, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASSTR",
    "130px": "CRBKGSTR"
  },
  town: {
    structures: {
      extraAnimation: { animation: "TBSTEXT3.def", x: 23, y: 20 },
      [Building.MageGuild1]: {
        animation: "TBSTMAGE.def",
        x: 473,
        y: 67,
        z: -1,
        border: "TOSMAG1.pcx",
        area: "TZSMAG1.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBSTMAG2.def",
        x: 473,
        y: 37,
        z: -1,
        border: "TOSMAG2.pcx",
        area: "TZSMAG2.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBSTMAG3.def",
        x: 473,
        y: 1,
        z: -1,
        border: "TOSMAG3.pcx",
        area: "TZSMAG3.pcx"
      },
      [Building.Tavern]: {
        animation: "TBSTTVRN.def",
        x: 170,
        y: 280,
        z: 2,
        border: "TOSTAV.pcx",
        area: "TZSTAV.pcx"
      },
      [Building.Fort]: {
        animation: "TBSTCSTL.def",
        x: 402,
        y: 148,
        z: -1,
        border: "TOSCA1.pcx",
        area: "TZSCA1.pcx"
      },
      [Building.Citadel]: {
        animation: "TBSTCAS2.def",
        x: 402,
        y: 114,
        z: -1,
        border: "TOSCA2.pcx",
        area: "TZSCA2.pcx"
      },
      [Building.Castle]: {
        animation: "TBSTCAS3.def",
        x: 402,
        y: 114,
        z: -1,
        border: "TOSCA3.pcx",
        area: "TZSCA3.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBSTHALL.def",
        x: 0,
        y: 259,
        border: "TOSHAL1A.pcx",
        area: "TZSHAL1A.pcx"
      },
      [Building.TownHall]: {
        animation: "TBSTHAL2.def",
        x: 0,
        y: 225,
        border: "TOSHAL2A.pcx",
        area: "TZSHAL2A.pcx"
      },
      [Building.CityHall]: {
        animation: "TBSTHAL3.def",
        x: 0,
        y: 201,
        border: "TOSHAL3A.pcx",
        area: "TZSHAL3A.pcx"
      },
      [Building.Capitol]: {
        animation: "TBSTHAL4.def",
        x: 0,
        y: 148,
        border: "TOSHAL4A.pcx",
        area: "TZSHAL4A.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBSTMARK.def",
        x: 397,
        y: 308,
        z: 1,
        border: "TOSMRK1.pcx",
        area: "TZSMRK1.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBSTSILO.def",
        x: 458,
        y: 248,
        z: 1,
        border: "TOSMRK2.pcx",
        area: "TZSMRK2.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBSTBLAK.def",
        x: 660,
        y: 286,
        border: "TOSBLK1.pcx",
        area: "TZSBLK1.pcx"
      },
      [Building.Special1]: {
        animation: "TBSTSPEC.def",
        x: 550,
        y: 229,
        border: "TOSCA1EA.pcx",
        area: "TZSCA1EA.pcx"
      },
      [Building.Horde1]: {
        animation: "TBSTHRD1.def",
        x: 373,
        y: 239,
        border: "TOSGOB1H.pcx",
        area: "TZSGOB1H.pcx",
        hidden: true
      },
      horde1Upgr: {
        animation: "TBSTHRD2.def",
        x: 373,
        y: 220,
        border: "TOSGOB2H.pcx",
        area: "TZSGOB2H.pcx",
        hidden: true,
        builds: "horde1"
      },
      [Building.Special2]: {
        animation: "TBSTEXT0.def",
        x: 473,
        y: 282,
        z: 3,
        border: "TOSMRK1C.pcx",
        area: "TZSMRK1C.pcx"
      },
      [Building.Special3]: {
        animation: "TBSTEXT1.def",
        x: 617,
        y: 286,
        z: 1,
        border: "TOSBLK2.pcx",
        area: "TZSBLK2.pcx"
      },
      [Building.Special4]: {
        animation: "TBSTEXT2.def",
        x: 313,
        y: 13,
        z: -1,
        border: "TOSVAH.pcx",
        area: "TZSVAH.pcx"
      },
      [Building.Grail]: {
        animation: "TBSTHOLY.def",
        x: 321,
        y: 105,
        z: 2,
        border: "TOSHOLYA.pcx",
        area: "TZSHOLYA.pcx"
      },
      [Building.Dwelling1]: {
        animation: "TBSTDW_0.def",
        x: 373,
        y: 239,
        border: "TOSGOB1.pcx",
        area: "TZSGOB1.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBSTDW_1.def",
        x: 266,
        y: 246,
        z: 1,
        border: "TOSWOL1.pcx",
        area: "TZSWOL1.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBSTDW_2.def",
        x: 566,
        y: 232,
        z: 2,
        border: "TOSORC1.pcx",
        area: "TZSORC1.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBSTDW_3.def",
        x: 197,
        y: 204,
        border: "TOSOGR1.pcx",
        area: "TZSOGR1.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBSTDW_4.def",
        x: 137,
        y: 30,
        z: -1,
        border: "TOSROC1.pcx",
        area: "TZSROC1.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBSTDW_5.def",
        x: 622,
        y: 160,
        z: -2,
        border: "TOSCYC1.pcx",
        area: "TZSCYC1.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBSTDW_6.def",
        x: 604,
        y: 0,
        border: "TOSBEH1A.pcx",
        area: "TZSBEH1A.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBSTUP_0.def",
        x: 373,
        y: 220,
        border: "TOSGOB2.pcx",
        area: "TZSGOB2.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBSTUP_1.def",
        x: 266,
        y: 225,
        z: 1,
        border: "TOSWOL2.pcx",
        area: "TZSWOL2.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBSTUP_2.def",
        x: 566,
        y: 158,
        z: 2,
        border: "TOSORC2.pcx",
        area: "TZSORC2.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBSTUP_3.def",
        x: 197,
        y: 137,
        border: "TOSOGR2.pcx",
        area: "TZSOGR2.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBSTUP_4.def",
        x: 129,
        y: 15,
        z: -1,
        border: "TOSROC2.pcx",
        area: "TZSROC2.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBSTUP_5.def",
        x: 616,
        y: 93,
        z: -2,
        border: "TOSCYC2A.pcx",
        area: "TZSCYC2A.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBSTUP_6.def",
        x: 604,
        y: 0,
        border: "TOSBEH2A.pcx",
        area: "TZSBEH2A.pcx"
      }
    },

    guildBackground: "TPMAGE.pcx",
    townBackground: "TBSTBACK.pcx",
    guildWindow: "TPMAGEST.pcx",
    buildingsIcons: "HALLSTRN.DEF",
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
        [Building.MageGuild1, Building.MageGuild2, Building.MageGuild3],
        [Building.Special4],
        [Building.Special1]
      ],
      [
        [Building.Special2],
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
      [Creature.Goblin, Creature.Hobgoblin],
      [Creature.WolfRrider, Creature.WolfRaider],
      [Creature.Orc, Creature.OrcChieftain],
      [Creature.Ogre, Creature.OgreMage],
      [Creature.Roc, Creature.Thunderbird],
      [Creature.Cyclops, Creature.CyclopsKing],
      [Creature.Behemoth, Creature.AncientBehemoth]
    ],
    warMachine: Artifact.AmmoCart,

    buildings: {
      [Building.MageGuild1]: {},
      [Building.MageGuild2]: { upgrades: Building.MageGuild1 },
      [Building.MageGuild3]: { upgrades: Building.MageGuild2 },
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
        produce: { ore: 1, wood: 1 }
      },
      [Building.Blacksmith]: {},

      [Building.Special1]: { requires: [Building.Fort] },
      [Building.Horde1]: { upgrades: Building.Dwelling1 },
      horde1Upgr: {
        upgrades: Building.DwellingUp1,
        requires: [Building.Horde1],
        mode: "auto"
      },
      [Building.Special2]: { requires: [Building.Marketplace] },
      [Building.Special3]: { requires: [Building.Blacksmith] },
      [Building.Special4]: { requires: [Building.Fort] },
      [Building.Grail]: { mode: "grail", produce: { gold: 5000 } },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: { requires: [Building.Dwelling1] },
      [Building.Dwelling3]: { requires: [Building.Dwelling1] },
      [Building.Dwelling4]: { requires: [Building.Dwelling3] },
      [Building.Dwelling5]: { requires: [Building.Dwelling2] },
      [Building.Dwelling6]: { requires: [Building.Dwelling4] },
      [Building.Dwelling7]: { requires: [Building.Dwelling5] },

      [Building.DwellingUp1]: { upgrades: Building.Dwelling1 },
      [Building.DwellingUp2]: {
        upgrades: Building.Dwelling2,
        requires: [Building.DwellingUp1]
      },
      [Building.DwellingUp3]: {
        upgrades: Building.Dwelling3,
        requires: [Building.Blacksmith]
      },
      [Building.DwellingUp4]: {
        upgrades: Building.Dwelling4,
        requires: [Building.MageGuild1]
      },
      [Building.DwellingUp5]: { upgrades: Building.Dwelling5 },
      [Building.DwellingUp6]: { upgrades: Building.Dwelling6 },
      [Building.DwellingUp7]: { upgrades: Building.Dwelling7 }
    }
  }
};
