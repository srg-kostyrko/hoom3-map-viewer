import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export default {
  creatureBackground: {
    "120px": "TPCASINF",
    "130px": "CRBKGINF"
  },
  town: {
    structures: {
      [Building.MageGuild1]: {
        animation: "TBINMAGE.def",
        x: 667,
        y: 127,
        border: "TOIMAG1A.pcx",
        area: "TZIMAG1A.pcx"
      },
      [Building.MageGuild2]: {
        animation: "TBINMAG2.def",
        x: 667,
        y: 101,
        border: "TOIMAG2A.pcx",
        area: "TZIMAG2A.pcx"
      },
      [Building.MageGuild3]: {
        animation: "TBINMAG3.def",
        x: 667,
        y: 83,
        border: "TOIMAG3A.pcx",
        area: "TZIMAG3A.pcx"
      },
      [Building.MageGuild4]: {
        animation: "TBINMAG4.def",
        x: 667,
        y: 56,
        border: "TOIMAG4A.pcx",
        area: "TZIMAG4A.pcx"
      },
      [Building.MageGuild5]: {
        animation: "TBINMAG5.def",
        x: 667,
        y: 35,
        border: "TOIMAG5A.pcx",
        area: "TZIMAG5A.pcx"
      },
      [Building.Tavern]: {
        animation: "TBINTVRN.def",
        x: 105,
        y: 219,
        z: 1,
        border: "TOITAV.pcx",
        area: "TZITAV.pcx"
      },
      [Building.Fort]: {
        animation: "TBINCSTL.def",
        x: 222,
        y: 44,
        border: "TOICAS2A.pcx",
        area: "TZICAS2A.pcx"
      },
      [Building.Citadel]: {
        animation: "TBINCAS2.def",
        x: 222,
        y: 44,
        border: "TOICAS1A.pcx",
        area: "TZICAS1A.pcx"
      },
      [Building.Castle]: {
        animation: "TBINCAS3.def",
        x: 222,
        y: 18,
        border: "TOICAS3A.pcx",
        area: "TZICAS3A.pcx"
      },
      [Building.VillageHall]: {
        animation: "TBINHALL.def",
        x: 0,
        y: 174,
        border: "TOIHAL1.pcx",
        area: "TZIHAL1.pcx"
      },
      [Building.TownHall]: {
        animation: "TBINHAL2.def",
        x: 0,
        y: 174,
        border: "TOIHAL2.pcx",
        area: "TZIHAL2.pcx"
      },
      [Building.CityHall]: {
        animation: "TBINHAL3.def",
        x: 0,
        y: 174,
        border: "TOIHAL3.pcx",
        area: "TZIHAL3.pcx"
      },
      [Building.Capitol]: {
        animation: "TBINHAL4.def",
        x: 0,
        y: 131,
        border: "TOIHAL4.pcx",
        area: "TZIHAL4.pcx"
      },
      [Building.Marketplace]: {
        animation: "TBINMARK.def",
        x: 511,
        y: 301,
        z: 4,
        border: "TOIMAR1.pcx",
        area: "TZIMAR1.pcx"
      },
      [Building.ResourceSilo]: {
        animation: "TBINSILO.def",
        x: 497,
        y: 337,
        z: 5,
        border: "TOIMAR2.pcx",
        area: "TZIMAR2.pcx"
      },
      [Building.Blacksmith]: {
        animation: "TBINBLAK.def",
        x: 684,
        y: 253,
        z: 1,
        border: "TOIBLKA.pcx",
        area: "TZIBLKA.pcx"
      },
      [Building.Horde1]: {
        animation: "TBINHRD1.def",
        x: 614,
        y: 256,
        border: "TOIMP1HA.pcx",
        area: "TZIMP1HA.pcx",
        hidden: true
      },
      horde1Upgr: {
        animation: "TBINHRD2.def",
        x: 614,
        y: 221,
        border: "TOIMP2HA.pcx",
        area: "TZIMP2HA.pcx",
        hidden: true,
        builds: "horde1"
      },
      [Building.Special2]: {
        animation: "TBINEXT0.def",
        x: 297,
        y: 0,
        z: -1,
        border: "TOICAB1A.pcx",
        area: "TZICAB1A.pcx"
      },
      [Building.Special3]: {
        animation: "TBINEXT1.def",
        x: 227,
        y: 174,
        z: 2,
        border: "TOICASGA.pcx",
        area: "TZICASGA.pcx"
      },
      [Building.Special4]: {
        animation: "TBINEXT2.def",
        x: 593,
        y: 104,
        border: "TOIPAIN.pcx",
        area: "TZIPAIN.pcx"
      },
      [Building.Horde3]: {
        animation: "TBINHRD3.def",
        x: 10,
        y: 301,
        border: "TOIHND1H.pcx",
        area: "TZIHND1H.pcx",
        hidden: true
      },
      horde3Upgr: {
        animation: "TBINHRD4.def",
        x: 9,
        y: 273,
        border: "TOIHND2H.pcx",
        area: "TZIHND2H.pcx",
        hidden: true,
        builds: "horde3"
      },
      [Building.Grail]: {
        animation: "TBINHOLY.def",
        x: 24,
        y: 10,
        z: -1,
        border: "TOIHOLY.pcx",
        area: "TZIHOLY.pcx"
      },
      [Building.Dwelling1]: {
        animation: "TBINDW_0.def",
        x: 614,
        y: 256,
        border: "TOIMP1A.pcx",
        area: "TZIMP1A.pcx"
      },
      [Building.Dwelling2]: {
        animation: "TBINDW_1.def",
        x: 187,
        y: 248,
        z: 4,
        border: "TOIGOG1A.pcx",
        area: "TZIGOG1A.pcx"
      },
      [Building.Dwelling3]: {
        animation: "TBINDW_2.def",
        x: 9,
        y: 325,
        border: "TOIHND1.pcx",
        area: "TZIHND1.pcx"
      },
      [Building.Dwelling4]: {
        animation: "TBINDW_3.def",
        x: 414,
        y: 204,
        z: 2,
        border: "TOIDMN1.pcx",
        area: "TZIDMN1.pcx"
      },
      [Building.Dwelling5]: {
        animation: "TBINDW_4.def",
        x: 359,
        y: 296,
        z: 3,
        border: "TOIPIT1.pcx",
        area: "TZIPIT1.pcx"
      },
      [Building.Dwelling6]: {
        animation: "TBINDW_5.def",
        x: 220,
        y: 350,
        z: 5,
        border: "TOIEFR1.pcx",
        area: "TZIEFR1.pcx"
      },
      [Building.Dwelling7]: {
        animation: "TBINDW_6.def",
        x: 420,
        y: 153,
        z: -1,
        border: "TOIDVL1.pcx",
        area: "TZIDVL1.pcx"
      },
      [Building.DwellingUp1]: {
        animation: "TBINUP_0.def",
        x: 614,
        y: 221,
        border: "TOIMP2A.pcx",
        area: "TZIMP2A.pcx"
      },
      [Building.DwellingUp2]: {
        animation: "TBINUP_1.def",
        x: 187,
        y: 212,
        z: 4,
        border: "TOIGOG2A.pcx",
        area: "TZIGOG2A.pcx"
      },
      [Building.DwellingUp3]: {
        animation: "TBINUP_2.def",
        x: 9,
        y: 273,
        border: "TOIHND2.pcx",
        area: "TZIHND2.pcx"
      },
      [Building.DwellingUp4]: {
        animation: "TBINUP_3.def",
        x: 412,
        y: 197,
        z: 2,
        border: "TOIDMN2.pcx",
        area: "TZIDMN2.pcx"
      },
      [Building.DwellingUp5]: {
        animation: "TBINUP_4.def",
        x: 359,
        y: 244,
        z: 3,
        border: "TOIPIT2.pcx",
        area: "TZIPIT2.pcx"
      },
      [Building.DwellingUp6]: {
        animation: "TBINUP_5.def",
        x: 220,
        y: 282,
        z: 5,
        border: "TOIEFR2.pcx",
        area: "TZIEFR2.pcx"
      },
      [Building.DwellingUp7]: {
        animation: "TBINUP_6.def",
        x: 420,
        y: 105,
        z: -1,
        border: "TOIDVL2.pcx",
        area: "TZIDVL2.pcx"
      }
    },

    guildBackground: "TPMAGE.pcx",
    townBackground: "TBINBACK.pcx",
    guildWindow: "TPMAGEIN.pcx",
    buildingsIcons: "HALLINFR.DEF",
    hallBackground: "TPTHBKIN.BMP",
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
        [Building.Special4],
        [Building.Special2]
      ],
      [
        [Building.Special3],
        [Building.Horde1, "horde1Upgr"],
        [Building.Horde3, "horde3Upgr"]
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
      [Creature.Imp, Creature.Familiar],
      [Creature.Gog, Creature.Magog],
      [Creature.HellHound, Creature.Cerberus],
      [Creature.Demon, Creature.HornedDemon],
      [Creature.PitFiend, Creature.PitLord],
      [Creature.Efreeti, Creature.EfreetSultan],
      [Creature.Devil, Creature.ArchDevil]
    ],
    primaryResource: Resource.Mercury,
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
        produce: { mercury: 1 }
      },
      [Building.Blacksmith]: {},

      [Building.Horde1]: { upgrades: Building.Dwelling1 },
      horde1Upgr: {
        upgrades: Building.DwellingUp1,
        requires: [Building.Horde1],
        mode: "auto"
      },
      [Building.Special2]: { requires: [Building.Fort] },
      [Building.Special3]: { requires: [Building.Citadel] },
      [Building.Special4]: { requires: [Building.MageGuild1] },
      [Building.Horde3]: { upgrades: Building.Dwelling3 },
      horde3Upgr: {
        upgrades: Building.DwellingUp3,
        requires: [Building.Horde3],
        mode: "auto"
      },
      [Building.Grail]: { mode: "grail", produce: { gold: 5000 } },

      [Building.Dwelling1]: { requires: [Building.Fort] },
      [Building.Dwelling2]: { requires: [Building.Dwelling1] },
      [Building.Dwelling3]: { requires: [Building.Dwelling1] },
      [Building.Dwelling4]: { requires: [Building.Dwelling2] },
      [Building.Dwelling5]: { requires: [Building.Dwelling4] },
      [Building.Dwelling6]: {
        requires: [Building.MageGuild1, Building.Dwelling4]
      },
      [Building.Dwelling7]: {
        requires: [Building.Dwelling5, Building.Dwelling6]
      },

      [Building.DwellingUp1]: { upgrades: Building.Dwelling1 },
      [Building.DwellingUp2]: { upgrades: Building.Dwelling2 },
      [Building.DwellingUp3]: { upgrades: Building.Dwelling3 },
      [Building.DwellingUp4]: { upgrades: Building.Dwelling4 },
      [Building.DwellingUp5]: {
        upgrades: Building.Dwelling5,
        requires: [Building.MageGuild2]
      },
      [Building.DwellingUp6]: { upgrades: Building.Dwelling6 },
      [Building.DwellingUp7]: { upgrades: Building.Dwelling7 }
    }
  }
};
