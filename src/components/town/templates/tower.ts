import { TownTemplate } from "../../../contracts/town";
import { Building, Creature, Resource, Artifact } from "homm3-parsers";

export const towerTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 597, y: 82, z: 0 },
      gfx: {
        animation: "TBTWMAGE.def",
        border: "TOTGLD1.pcx",
        area: "TZTGLD1.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 593, y: 65, z: 0 },
      gfx: {
        animation: "TBTWMAG2.def",
        border: "TOTGLD2.pcx",
        area: "TZTGLD2.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 593, y: 48, z: 0 },
      gfx: {
        animation: "TBTWMAG3.def",
        border: "TOTGLD3.pcx",
        area: "TZTGLD3.pcx"
      }
    },
    [Building.MageGuild4]: {
      position: { x: 593, y: 31, z: 0 },
      gfx: {
        animation: "TBTWMAG4.def",
        border: "TOTGLD4.pcx",
        area: "TZTGLD4.pcx"
      }
    },
    [Building.MageGuild5]: {
      position: { x: 593, y: 14, z: 0 },
      gfx: {
        animation: "TBTWMAG5.def",
        border: "TOTGLD5.pcx",
        area: "TZTGLD5.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 375, y: 278, z: 1 },
      gfx: {
        animation: "TBTWTVRN.def",
        border: "TOTTAV.pcx",
        area: "TZTTAV.pcx"
      }
    },
    [Building.Fort]: {
      position: { x: 304, y: 0, z: 0 },
      gfx: {
        animation: "TBTWCSTL.def",
        border: "TOTCAS1.pcx",
        area: "TZTCAS1.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 301, y: 0, z: 0 },
      gfx: {
        animation: "TBTWCAS2.def",
        border: "TOTCAS2.pcx",
        area: "TZTCAS2.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 301, y: 0, z: 0 },
      gfx: {
        animation: "TBTWCAS3.def",
        border: "TOTCAS3.pcx",
        area: "TZTCAS3.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: 0, y: 259, z: 1 },
      gfx: {
        animation: "TBTWHALL.def",
        border: "TOTHAL1.pcx",
        area: "TZTHAL1.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 0, y: 220, z: 1 },
      gfx: {
        animation: "TBTWHAL2.def",
        border: "TOTHAL2.pcx",
        area: "TZTHAL2.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 0, y: 82, z: 1 },
      gfx: {
        animation: "TBTWHAL3.def",
        border: "TOTHAL3.pcx",
        area: "TZTHAL3.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 0, y: 82, z: 1 },
      gfx: {
        animation: "TBTWHAL4.def",
        border: "TOTHAL4.pcx",
        area: "TZTHAL4.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 614, y: 292, z: 0 },
      gfx: {
        animation: "TBTWMARK.def",
        border: "TOTMRK.pcx",
        area: "TZTMRK.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 763, y: 214, z: 3 },
      gfx: {
        animation: "TBTWSILO.def",
        border: "TOTMRKS.pcx",
        area: "TZTMRKS.pcx"
      },
      requires: [Building.Marketplace],
      produce: { [Resource.Gems]: 1 }
    },
    [Building.Blacksmith]: {
      position: { x: 478, y: 211, z: 0 },
      gfx: {
        animation: "TBTWBLAK.def",
        border: "TOTBLKA.pcx",
        area: "TZTBLKA.pcx"
      }
    },
    [Building.Special1]: {
      position: { x: 674, y: 276, z: 2 },
      gfx: {
        animation: "TBTWSPEC.def",
        border: "TOTMRKA.pcx",
        area: "TZTMRKA.pcx"
      },
      requires: [Building.Marketplace]
    },
    [Building.Horde2]: {
      position: { x: 0, y: 47, z: 0 },
      gfx: {
        animation: "TBTWHRD1.def",
        border: "TOTGAR1H.pcx",
        area: "TZTGAR1H.pcx"
      },
      requires: [Building.Dwelling2]
    },

    [Building.Special2]: {
      position: { x: 409, y: 82, z: 0 },
      gfx: {
        animation: "TBTWEXT0.def",
        border: "TOTCASW.pcx",
        area: "TZTCASW.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Special3]: {
      position: { x: 702, y: 115, z: 0 },
      gfx: {
        animation: "TBTWEXT1.def",
        border: "TOTGLDL.pcx",
        area: "TZTGLDL.pcx"
      },
      requires: [Building.MageGuild1]
    },
    [Building.Special4]: {
      position: { x: 592, y: 189, z: 1 },
      gfx: {
        animation: "TBTWEXT2.def",
        border: "TOTGLDW.pcx",
        area: "TZTGLDW.pcx"
      },
      requires: [Building.MageGuild1]
    },
    [Building.Grail]: {
      position: { x: 237, y: 14, z: -1 },
      gfx: {
        animation: "TBTWHOLY.def",
        border: "TOTHOLYA.pcx",
        area: "TZTHOLYA.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },
    [Building.Dwelling1]: {
      position: { x: 453, y: 221, z: 1 },
      gfx: {
        animation: "TBTWDW_0.def",
        border: "TOTGRM1A.pcx",
        area: "TZTGRM1A.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 4, y: 46, z: 0 },
      gfx: {
        animation: "TBTWDW_1.def",
        border: "TOTGAR1.pcx",
        area: "TZTGAR1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling3]: {
      position: { x: 209, y: 177, z: 1 },
      gfx: {
        animation: "TBTWDW_2.def",
        border: "TOTGOL1A.pcx",
        area: "TZTGOL1A.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling4]: {
      position: { x: 613, y: 95, z: 0 },
      gfx: {
        animation: "TBTWDW_3.def",
        border: "TOTMAG1.pcx",
        area: "TZTMAG1.pcx"
      },
      requires: [Building.MageGuild1, Building.Dwelling2, Building.Dwelling3]
    },
    [Building.Dwelling5]: {
      position: { x: 511, y: 75, z: 0 },
      gfx: {
        animation: "TBTWDW_4.def",
        border: "TOTGEN1.pcx",
        area: "TZTGEN1.pcx"
      },
      requires: [Building.Dwelling4]
    },
    [Building.Dwelling6]: {
      position: { x: 681, y: 208, z: 2 },
      gfx: {
        animation: "TBTWDW_5.def",
        border: "TOTNAG1.pcx",
        area: "TZTNAG1.pcx"
      },
      requires: [Building.Dwelling4]
    },
    [Building.Dwelling7]: {
      position: { x: 75, y: 144, z: -1 },
      gfx: {
        animation: "TBTWDW_6.def",
        border: "TOTTIT1.pcx",
        area: "TZTTIT1.pcx"
      },
      requires: [Building.Dwelling5, Building.Dwelling6]
    },
    [Building.DwellingUp1]: {
      position: { x: 446, y: 221, z: 1 },
      gfx: {
        animation: "TBTWUP_0.def",
        border: "TOTGRM2A.pcx",
        area: "TZTGRM2A.pcx"
      }
    },
    [Building.DwellingUp2]: {
      position: { x: 4, y: 28, z: 0 },
      gfx: {
        animation: "TBTWUP_1.def",
        border: "TOTGAR2.pcx",
        area: "TZTGAR2.pcx"
      }
    },
    [Building.DwellingUp3]: {
      position: { x: 209, y: 177, z: 1 },
      gfx: {
        animation: "TBTWUP_2.def",
        border: "TOTGOL2A.pcx",
        area: "TZTGOL2A.pcx"
      }
    },
    [Building.DwellingUp4]: {
      position: { x: 613, y: 74, z: 0 },
      gfx: {
        animation: "TBTWUP_3.def",
        border: "TOTMAG2.pcx",
        area: "TZTMAG2.pcx"
      },
      requires: [Building.Special3]
    },
    [Building.DwellingUp5]: {
      position: { x: 511, y: 8, z: 0 },
      gfx: {
        animation: "TBTWUP_4.def",
        border: "TOTGEN2.pcx",
        area: "TZTGEN2.pcx"
      }
    },
    [Building.DwellingUp6]: {
      position: { x: 681, y: 157, z: 2 },
      gfx: {
        animation: "TBTWUP_5.def",
        border: "TOTNAG2.pcx",
        area: "TZTNAG2.pcx"
      }
    },
    [Building.DwellingUp7]: {
      position: { x: 75, y: 91, z: -1 },
      gfx: {
        animation: "TBTWUP_6.def",
        border: "TOTTIT2.pcx",
        area: "TZTTIT2.pcx"
      }
    },
    [Building.ArtifactMerchants]: null,
    [Building.Shipyard]: null,
    [Building.Horde1]: null,
    [Building.Horde3]: null,
    [Building.Horde4]: null,
    [Building.Horde5]: null
  },
  animations: [],
  extras: {},
  upgrades: {
    [Building.Horde2]: {
      position: { x: 0, y: 28, z: 0 },
      gfx: {
        animation: "TBTWHRD2.def",
        border: "TOTGAR2H.pcx",
        area: "TZTGAR2H.pcx"
      },
      requires: [Building.DwellingUp2]
    }
  },
  musicTheme: "music/TowerTown",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBTWBACK.pcx",
  guildWindow: "TPMAGETW.pcx",
  buildingsIcons: "HALLTOWR.DEF",
  hallBackground: "TPTHBKTW.pcx",
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
    [[Building.Special1], [Building.Special2], [Building.Horde2]],
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
  creatureBackground: "CRBKGTOW.pcx"
};
