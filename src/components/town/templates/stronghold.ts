import { TownTemplate } from "../../../contracts/town";
import { Building, Creature, Artifact, Resource } from "homm3-parsers";

export const strongholdTemplate: TownTemplate = {
  buildings: {
    [Building.MageGuild1]: {
      position: { x: 473, y: 67, z: -1 },
      gfx: {
        animation: "TBSTMAGE.def",
        border: "TOSMAG1.pcx",
        area: "TZSMAG1.pcx"
      }
    },
    [Building.MageGuild2]: {
      position: { x: 473, y: 37, z: -1 },
      gfx: {
        animation: "TBSTMAG2.def",
        border: "TOSMAG2.pcx",
        area: "TZSMAG2.pcx"
      }
    },
    [Building.MageGuild3]: {
      position: { x: 473, y: 1, z: -1 },
      gfx: {
        animation: "TBSTMAG3.def",
        border: "TOSMAG3.pcx",
        area: "TZSMAG3.pcx"
      }
    },
    [Building.Tavern]: {
      position: { x: 170, y: 280, z: 2 },
      gfx: {
        animation: "TBSTTVRN.def",
        border: "TOSTAV.pcx",
        area: "TZSTAV.pcx"
      }
    },
    [Building.Fort]: {
      position: { x: 402, y: 148, z: -1 },
      gfx: {
        animation: "TBSTCSTL.def",
        border: "TOSCA1.pcx",
        area: "TZSCA1.pcx"
      }
    },
    [Building.Citadel]: {
      position: { x: 402, y: 114, z: -1 },
      gfx: {
        animation: "TBSTCAS2.def",
        border: "TOSCA2.pcx",
        area: "TZSCA2.pcx"
      }
    },
    [Building.Castle]: {
      position: { x: 402, y: 114, z: -1 },
      gfx: {
        animation: "TBSTCAS3.def",
        border: "TOSCA3.pcx",
        area: "TZSCA3.pcx"
      }
    },
    [Building.VillageHall]: {
      position: { x: 0, y: 259, z: 0 },
      gfx: {
        animation: "TBSTHALL.def",
        border: "TOSHAL1A.pcx",
        area: "TZSHAL1A.pcx"
      },
      produce: { [Resource.Gold]: 500 }
    },
    [Building.TownHall]: {
      position: { x: 0, y: 225, z: 0 },
      gfx: {
        animation: "TBSTHAL2.def",
        border: "TOSHAL2A.pcx",
        area: "TZSHAL2A.pcx"
      },
      requires: [Building.Tavern],
      produce: { [Resource.Gold]: 1000 }
    },
    [Building.CityHall]: {
      position: { x: 0, y: 201, z: 0 },
      gfx: {
        animation: "TBSTHAL3.def",
        border: "TOSHAL3A.pcx",
        area: "TZSHAL3A.pcx"
      },
      requires: [
        Building.MageGuild1,
        Building.Marketplace,
        Building.Blacksmith
      ],
      produce: { [Resource.Gold]: 2000 }
    },
    [Building.Capitol]: {
      position: { x: 0, y: 148, z: 0 },
      gfx: {
        animation: "TBSTHAL4.def",
        border: "TOSHAL4A.pcx",
        area: "TZSHAL4A.pcx"
      },
      requires: [Building.Castle],
      produce: { [Resource.Gold]: 4000 }
    },
    [Building.Marketplace]: {
      position: { x: 397, y: 308, z: 1 },
      gfx: {
        animation: "TBSTMARK.def",
        border: "TOSMRK1.pcx",
        area: "TZSMRK1.pcx"
      }
    },
    [Building.ResourceSilo]: {
      position: { x: 458, y: 248, z: 1 },
      gfx: {
        animation: "TBSTSILO.def",
        border: "TOSMRK2.pcx",
        area: "TZSMRK2.pcx"
      },
      requires: [Building.Marketplace],
      produce: { [Resource.Ore]: 1, [Resource.Wood]: 1 }
    },
    [Building.Blacksmith]: {
      position: { x: 660, y: 286, z: 0 },
      gfx: {
        animation: "TBSTBLAK.def",
        border: "TOSBLK1.pcx",
        area: "TZSBLK1.pcx"
      }
    },
    [Building.Special1]: {
      position: { x: 550, y: 229, z: 0 },
      gfx: {
        animation: "TBSTSPEC.def",
        border: "TOSCA1EA.pcx",
        area: "TZSCA1EA.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Horde1]: {
      position: { x: 373, y: 239, z: 0 },
      gfx: {
        animation: "TBSTHRD1.def",
        border: "TOSGOB1H.pcx",
        area: "TZSGOB1H.pcx"
      },
      requires: [Building.Dwelling1]
    },

    [Building.Special2]: {
      position: { x: 473, y: 282, z: 3 },
      gfx: {
        animation: "TBSTEXT0.def",
        border: "TOSMRK1C.pcx",
        area: "TZSMRK1C.pcx"
      },
      requires: [Building.Marketplace]
    },
    [Building.Special3]: {
      position: { x: 617, y: 286, z: 1 },
      gfx: {
        animation: "TBSTEXT1.def",
        border: "TOSBLK2.pcx",
        area: "TZSBLK2.pcx"
      },
      requires: [Building.Blacksmith]
    },
    [Building.Special4]: {
      position: { x: 313, y: 13, z: -1 },
      gfx: {
        animation: "TBSTEXT2.def",
        border: "TOSVAH.pcx",
        area: "TZSVAH.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Grail]: {
      position: { x: 321, y: 105, z: 2 },
      gfx: {
        animation: "TBSTHOLY.def",
        border: "TOSHOLYA.pcx",
        area: "TZSHOLYA.pcx"
      },
      produce: { [Resource.Gold]: 5000 }
    },
    [Building.Dwelling1]: {
      position: { x: 373, y: 239, z: 0 },
      gfx: {
        animation: "TBSTDW_0.def",
        border: "TOSGOB1.pcx",
        area: "TZSGOB1.pcx"
      },
      requires: [Building.Fort]
    },
    [Building.Dwelling2]: {
      position: { x: 266, y: 246, z: 1 },
      gfx: {
        animation: "TBSTDW_1.def",
        border: "TOSWOL1.pcx",
        area: "TZSWOL1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling3]: {
      position: { x: 566, y: 232, z: 2 },
      gfx: {
        animation: "TBSTDW_2.def",
        border: "TOSORC1.pcx",
        area: "TZSORC1.pcx"
      },
      requires: [Building.Dwelling1]
    },
    [Building.Dwelling4]: {
      position: { x: 197, y: 204, z: 0 },
      gfx: {
        animation: "TBSTDW_3.def",
        border: "TOSOGR1.pcx",
        area: "TZSOGR1.pcx"
      },
      requires: [Building.Dwelling3]
    },
    [Building.Dwelling5]: {
      position: { x: 137, y: 30, z: -1 },
      gfx: {
        animation: "TBSTDW_4.def",
        border: "TOSROC1.pcx",
        area: "TZSROC1.pcx"
      },
      requires: [Building.Dwelling2]
    },
    [Building.Dwelling6]: {
      position: { x: 622, y: 160, z: -2 },
      gfx: {
        animation: "TBSTDW_5.def",
        border: "TOSCYC1.pcx",
        area: "TZSCYC1.pcx"
      },
      requires: [Building.Dwelling4]
    },
    [Building.Dwelling7]: {
      position: { x: 604, y: 0, z: 0 },
      gfx: {
        animation: "TBSTDW_6.def",
        border: "TOSBEH1A.pcx",
        area: "TZSBEH1A.pcx"
      },
      requires: [Building.Dwelling5]
    },
    [Building.DwellingUp1]: {
      position: { x: 373, y: 220, z: 0 },
      gfx: {
        animation: "TBSTUP_0.def",
        border: "TOSGOB2.pcx",
        area: "TZSGOB2.pcx"
      }
    },
    [Building.DwellingUp2]: {
      position: { x: 266, y: 225, z: 1 },
      gfx: {
        animation: "TBSTUP_1.def",
        border: "TOSWOL2.pcx",
        area: "TZSWOL2.pcx"
      },
      requires: [Building.DwellingUp1]
    },
    [Building.DwellingUp3]: {
      position: { x: 566, y: 158, z: 2 },
      gfx: {
        animation: "TBSTUP_2.def",
        border: "TOSORC2.pcx",
        area: "TZSORC2.pcx"
      },
      requires: [Building.Blacksmith]
    },
    [Building.DwellingUp4]: {
      position: { x: 197, y: 137, z: 0 },
      gfx: {
        animation: "TBSTUP_3.def",
        border: "TOSOGR2.pcx",
        area: "TZSOGR2.pcx"
      },
      requires: [Building.MageGuild1]
    },
    [Building.DwellingUp5]: {
      position: { x: 129, y: 15, z: -1 },
      gfx: {
        animation: "TBSTUP_4.def",
        border: "TOSROC2.pcx",
        area: "TZSROC2.pcx"
      }
    },
    [Building.DwellingUp6]: {
      position: { x: 616, y: 93, z: -2 },
      gfx: {
        animation: "TBSTUP_5.def",
        border: "TOSCYC2A.pcx",
        area: "TZSCYC2A.pcx"
      }
    },
    [Building.DwellingUp7]: {
      position: { x: 604, y: 0, z: 0 },
      gfx: {
        animation: "TBSTUP_6.def",
        border: "TOSBEH2A.pcx",
        area: "TZSBEH2A.pcx"
      }
    },
    [Building.ArtifactMerchants]: null,
    [Building.MageGuild4]: null,
    [Building.MageGuild5]: null,
    [Building.Shipyard]: null,
    [Building.Horde2]: null,
    [Building.Horde3]: null,
    [Building.Horde4]: null,
    [Building.Horde5]: null
  },
  animations: [
    {
      position: { x: 23, y: 20, z: 0 },
      gfx: "TBSTEXT3.def"
    }
  ],
  extras: {},
  upgrades: {
    [Building.Horde1]: {
      position: { x: 373, y: 220, z: 0 },
      gfx: {
        animation: "TBSTHRD2.def",
        border: "TOSGOB2H.pcx",
        area: "TZSGOB2H.pcx"
      },
      requires: [Building.DwellingUp1]
    }
  },
  musicTheme: "music/Stronghold",
  guildBackground: "TPMAGE.pcx",
  townBackground: "TBSTBACK.pcx",
  guildWindow: "TPMAGEST.pcx",
  buildingsIcons: "HALLSTRN.DEF",
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
      [Building.MageGuild1, Building.MageGuild2, Building.MageGuild3],
      [Building.Special4],
      [Building.Special1]
    ],
    [[Building.Special2], [Building.Special3], [Building.Horde1]],
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
    [Creature.WolfRider, Creature.WolfRaider],
    [Creature.Orc, Creature.OrcChieftain],
    [Creature.Ogre, Creature.OgreMage],
    [Creature.Roc, Creature.Thunderbird],
    [Creature.Cyclop, Creature.CyclopKing],
    [Creature.Behemoth, Creature.AncientBehemoth]
  ],
  warMachine: Artifact.AmmoCart,
  creatureBackground: "CRBKGSTR.pcx"
};
