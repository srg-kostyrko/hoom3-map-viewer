import { CreatureConfig } from "../../contracts/creature";
import { Creature, Alignment, Spell, Terrain, Resource } from "homm3-parsers";
import {
  TraitType,
  EffectRange,
  ImmunityType,
  AttackType
} from "../../contracts/traits";

export const CREATURES_CONFIG: Record<Creature, CreatureConfig> = {
  [Creature.Pikeman]: {
    level: 1,
    faction: Alignment.Castle,
    upgradesTo: Creature.Halberdier,
    graphics: "CPKMAN.DEF",
    abilities: [
      {
        type: TraitType.CHARGE_IMMUNITY
      }
    ]
  },
  [Creature.Halberdier]: {
    level: 1,
    faction: Alignment.Castle,
    abilities: [
      {
        type: TraitType.CHARGE_IMMUNITY
      }
    ],
    graphics: "CHALBD.DEF"
  },
  [Creature.Archer]: {
    level: 2,
    faction: Alignment.Castle,
    upgradesTo: Creature.Marksman,
    graphics: "CLCBOW.DEF",
    missileGraphics: "PLCBOWX.DEF",
    abilities: []
  },
  [Creature.Marksman]: {
    level: 2,
    faction: Alignment.Castle,
    abilities: [
      {
        type: TraitType.ADDITIONAL_ATTACK,
        effectRange: EffectRange.ONLY_DISTANCE_FIGHT
      }
    ],
    graphics: "CHCBOW.DEF",
    missileGraphics: "PLCBOWX.DEF"
  },
  [Creature.Griffin]: {
    level: 3,
    faction: Alignment.Castle,
    abilities: [
      {
        type: TraitType.ADDITIONAL_RETALIATION,
        value: 1
      }
    ],
    upgradesTo: Creature.RoyalGriffin,
    graphics: "CGRIFF.DEF"
  },
  [Creature.RoyalGriffin]: {
    level: 3,
    faction: Alignment.Castle,
    abilities: [
      {
        type: TraitType.UNLIMITED_RETALIATIONS
      }
    ],
    graphics: "CRGRIF.DEF"
  },
  [Creature.Swordsman]: {
    level: 4,
    faction: Alignment.Castle,
    upgradesTo: Creature.Crusader,
    graphics: "CSWORD.DEF",
    abilities: []
  },
  [Creature.Crusader]: {
    level: 4,
    faction: Alignment.Castle,
    abilities: [
      {
        type: TraitType.ADDITIONAL_ATTACK
      }
    ],
    graphics: "CCRUSD.DEF"
  },
  [Creature.Monk]: {
    level: 5,
    faction: Alignment.Castle,
    upgradesTo: Creature.Zealot,
    graphics: "CMONKK.DEF",
    missileGraphics: "CPRZEAX.DEF",
    abilities: []
  },
  [Creature.Zealot]: {
    level: 5,
    faction: Alignment.Castle,
    graphics: "CZEALT.DEF",
    missileGraphics: "CPRZEAX.DEF",
    abilities: []
  },
  [Creature.Cavalier]: {
    level: 6,
    faction: Alignment.Castle,
    upgradesTo: Creature.Champion,
    graphics: "CCAVLR.DEF",
    abilities: []
  },
  [Creature.Champion]: {
    level: 6,
    faction: Alignment.Castle,
    graphics: "CCHAMP.DEF",
    abilities: []
  },
  [Creature.Angel]: {
    level: 7,
    faction: Alignment.Castle,
    abilities: [
      {
        type: TraitType.HATE,
        creature: Creature.Devil,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.ArchDevil,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.MORALE,
        value: 1
      }
    ],
    upgradesTo: Creature.Archangel,
    graphics: "CANGEL.DEF"
  },
  [Creature.Archangel]: {
    level: 7,
    faction: Alignment.Castle,
    abilities: [
      {
        type: TraitType.SPECIFIC_SPELL_POWER,
        spell: Spell.Resurrection,
        value: 100
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.Resurrection,
        level: 3
      },
      {
        type: TraitType.CASTS,
        amount: 1
      },
      {
        type: TraitType.HATE,
        creature: Creature.Devil,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.ArchDevil,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.MORALE,
        value: 1
      }
    ],
    graphics: "CRANGL.DEF"
  },
  [Creature.AirElemental]: {
    level: 2,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.MIND_IMMUNITY
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.MeteorShower
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.LightningBolt,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.ChainLightning,
        damageMultiplier: 2
      }
    ],
    upgradesTo: Creature.StormElemental,
    graphics: "CAELEM.DEF"
  },
  [Creature.EarthElemental]: {
    level: 5,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.MIND_IMMUNITY
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.MeteorShower,
        damageMultiplier: 2
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.LightningBolt
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.ChainLightning
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.Armageddon
      }
    ],
    upgradesTo: Creature.MagmaElemental,
    graphics: "CEELEM.DEF"
  },
  [Creature.FireElemental]: {
    level: 4,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.MIND_IMMUNITY
      },
      {
        type: TraitType.FIRE_IMMUNITY,
        immuneTo: ImmunityType.All
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.FrostRing,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.IceBolt,
        damageMultiplier: 2
      }
    ],
    upgradesTo: Creature.EnergyElemental,
    graphics: "CFELEM.DEF"
  },
  [Creature.WaterElemental]: {
    level: 3,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.MIND_IMMUNITY
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.FireShield,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.Inferno,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.Fireball,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.FireWall,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.Armageddon,
        damageMultiplier: 2
      },
      {
        type: TraitType.WATER_IMMUNITY,
        immuneTo: ImmunityType.DamageOnly
      }
    ],
    upgradesTo: Creature.IceElemental,
    graphics: "CWELEM.DEF"
  },
  [Creature.Pixie]: {
    level: 1,
    faction: Alignment.Conflux,
    upgradesTo: Creature.Sprite,
    abilities: [],
    graphics: "CPIXIE.DEF"
  },
  [Creature.Sprite]: {
    level: 1,
    faction: Alignment.Conflux,
    abilities: [],
    graphics: "CSPRITE.DEF"
  },
  [Creature.PsychicElemental]: {
    level: 6,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      }
    ],
    upgradesTo: Creature.MagicElemental,
    graphics: "CPSYEL.DEF"
  },
  [Creature.MagicElemental]: {
    level: 6,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.LEVEL_SPELL_IMMUNITY,
        level: 5
      }
    ],
    graphics: "CMAGEL.DEF"
  },
  [Creature.IceElemental]: {
    level: 3,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.CREATURE_ENCHANT_POWER,
        duration: 6
      },
      {
        type: TraitType.CASTS,
        amount: 3
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.ProtectionFromWater,
        level: 2
      },
      {
        type: TraitType.MIND_IMMUNITY
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.FireShield,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.Inferno,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.Fireball,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.FireWall,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.Armageddon,
        damageMultiplier: 2
      },
      {
        type: TraitType.WATER_IMMUNITY,
        immuneTo: ImmunityType.DamageOnly
      }
    ],
    graphics: "CICEE.DEF",
    missileGraphics: "PICEE.DEF"
  },
  [Creature.MagmaElemental]: {
    level: 5,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.CREATURE_ENCHANT_POWER,
        duration: 6
      },
      {
        type: TraitType.CASTS,
        amount: 3
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.ProtectionFromEarth,
        level: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.MeteorShower,
        damageMultiplier: 2
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.LightningBolt
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.ChainLightning
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.Armageddon
      }
    ],
    graphics: "CSTONE.DEF"
  },
  [Creature.StormElemental]: {
    level: 2,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.CREATURE_ENCHANT_POWER,
        duration: 6
      },
      {
        type: TraitType.CASTS,
        amount: 3
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.ProtectionFromAir,
        level: 2
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.MeteorShower
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.LightningBolt,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.ChainLightning,
        damageMultiplier: 2
      }
    ],
    graphics: "CSTORM.DEF",
    missileGraphics: "CPRGTIX.DEF"
  },
  [Creature.EnergyElemental]: {
    level: 4,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.NON_LIVING
      },
      {
        type: TraitType.MIND_IMMUNITY
      },
      {
        type: TraitType.FIRE_IMMUNITY,
        immuneTo: ImmunityType.All
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.FrostRing,
        damageMultiplier: 2
      },
      {
        type: TraitType.MORE_DAMAGE_FROM_SPELL,
        spell: Spell.IceBolt,
        damageMultiplier: 2
      },
      {
        type: TraitType.CREATURE_ENCHANT_POWER,
        duration: 6
      },
      {
        type: TraitType.CASTS,
        amount: 3
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.ProtectionFromFire,
        level: 2
      }
    ],
    graphics: "CNRG.DEF"
  },
  [Creature.Firebird]: {
    level: 7,
    faction: Alignment.Conflux,
    upgradesTo: Creature.Phoenix,
    abilities: [
      {
        type: TraitType.FIRE_IMMUNITY,
        immuneTo: ImmunityType.All
      }
    ],
    graphics: "CFBIRD.DEF"
  },
  [Creature.Phoenix]: {
    level: 7,
    faction: Alignment.Conflux,
    abilities: [
      {
        type: TraitType.CASTS,
        amount: 1
      },
      {
        type: TraitType.FIRE_IMMUNITY,
        immuneTo: ImmunityType.All
      },
      {
        type: TraitType.REBIRTH,
        restoreHP: 0.2
      }
    ],
    graphics: "CPHX.DEF"
  },
  [Creature.Troglodyte]: {
    level: 1,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.Blind
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.Stone
      }
    ],
    upgradesTo: Creature.InfernalTroglodyte,
    graphics: "CTROGL.DEF"
  },
  [Creature.InfernalTroglodyte]: {
    level: 1,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.Blind
      },
      {
        type: TraitType.SPELL_IMMUNITY,
        spell: Spell.Stone
      }
    ],
    graphics: "CITROG.DEF"
  },
  [Creature.Harpy]: {
    level: 2,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.RETURN_AFTER_STRIKE
      }
    ],
    upgradesTo: Creature.HarpyHag,
    graphics: "CHARPY.DEF"
  },
  [Creature.HarpyHag]: {
    level: 2,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.RETURN_AFTER_STRIKE
      },
      {
        type: TraitType.BLOCKS_RETALIATION
      }
    ],
    graphics: "CHARPH.DEF"
  },
  [Creature.Beholder]: {
    level: 3,
    faction: Alignment.Dungeon,
    upgradesTo: Creature.EvilEye,
    abilities: [],
    graphics: "CBEHOL.DEF",
    missileGraphics: "SMBALX.DEF"
  },
  [Creature.EvilEye]: {
    level: 3,
    faction: Alignment.Dungeon,
    abilities: [],
    graphics: "CEVEYE.DEF",
    missileGraphics: "SMBALX.DEF"
  },
  [Creature.Medusa]: {
    level: 4,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Stone,
        chance: 20,
        level: 0,
        after: AttackType.MeleeOnly
      }
    ],
    upgradesTo: Creature.MedusaQueen,
    graphics: "CMEDUS.DEF",
    missileGraphics: "PMEDUSX.DEF"
  },
  [Creature.MedusaQueen]: {
    level: 4,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Stone,
        chance: 20,
        level: 0,
        after: AttackType.MeleeOnly
      }
    ],
    graphics: "CMEDUQ.DEF",
    missileGraphics: "PMEDUSX.DEF"
  },
  [Creature.Minotaur]: {
    level: 5,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.SELF_MORALE
      }
    ],
    upgradesTo: Creature.MinotaurKing,
    graphics: "CMINOT.DEF"
  },
  [Creature.MinotaurKing]: {
    level: 5,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.SELF_MORALE
      }
    ],
    graphics: "CMINOK.DEF"
  },
  [Creature.Manticore]: {
    level: 6,
    faction: Alignment.Dungeon,
    upgradesTo: Creature.Scorpicore,
    abilities: [],
    graphics: "CMCORE.DEF"
  },
  [Creature.Scorpicore]: {
    level: 6,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Paralyze,
        chance: 20
      }
    ],
    graphics: "CCMCOR.DEF"
  },
  [Creature.RedDragon]: {
    level: 7,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.TWO_HEX_ATTACK_BREATH
      },
      {
        type: TraitType.LEVEL_SPELL_IMMUNITY,
        level: 3
      }
    ],
    upgradesTo: Creature.BlackDragon,
    graphics: "CRDRGN.DEF"
  },
  [Creature.BlackDragon]: {
    level: 7,
    faction: Alignment.Dungeon,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.TWO_HEX_ATTACK_BREATH
      },
      {
        type: TraitType.LEVEL_SPELL_IMMUNITY,
        level: 5
      },
      {
        type: TraitType.HATE,
        creature: Creature.Giant,
        damageMultiplier: 0.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.Titan,
        damageMultiplier: 0.5
      }
    ],
    graphics: "CBDRGN.DEF"
  },
  [Creature.Gnoll]: {
    level: 1,
    faction: Alignment.Fortress,
    upgradesTo: Creature.GnollMarauder,
    abilities: [],
    graphics: "CGNOLL.DEF"
  },
  [Creature.GnollMarauder]: {
    level: 1,
    faction: Alignment.Fortress,
    abilities: [],
    graphics: "CGNOLM.DEF"
  },
  [Creature.Lizardman]: {
    level: 2,
    faction: Alignment.Fortress,
    upgradesTo: Creature.LizardWarrior,
    abilities: [],
    graphics: "CPLIZA.DEF",
    missileGraphics: "PPLIZAX.DEF"
  },
  [Creature.LizardWarrior]: {
    level: 2,
    faction: Alignment.Fortress,
    abilities: [],
    graphics: "CALIZA.DEF",
    missileGraphics: "PPLIZAX.DEF"
  },
  [Creature.Gorgon]: {
    level: 5,
    faction: Alignment.Fortress,
    upgradesTo: Creature.MightyGorgon,
    abilities: [],
    graphics: "CCGORG.DEF"
  },
  [Creature.MightyGorgon]: {
    level: 5,
    faction: Alignment.Fortress,
    abilities: [
      {
        type: TraitType.DEATH_STARE,
        chanceToKill: 10
      }
    ],
    graphics: "CBGOG.DEF"
  },
  [Creature.SerpentFly]: {
    level: 3,
    faction: Alignment.Fortress,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.DragonflyDispel,
        chance: 100
      }
    ],
    upgradesTo: Creature.DragonFly,
    graphics: "CDRFLY.DEF"
  },
  [Creature.DragonFly]: {
    level: 3,
    faction: Alignment.Fortress,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.DragonflyDispel,
        chance: 100
      },
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Weakness,
        chance: 100
      }
    ],
    graphics: "CDRFIR.DEF"
  },
  [Creature.Basilisk]: {
    level: 4,
    faction: Alignment.Fortress,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Stone,
        chance: 20
      }
    ],
    upgradesTo: Creature.GreaterBasilisk,
    graphics: "CBASIL.DEF"
  },
  [Creature.GreaterBasilisk]: {
    level: 4,
    faction: Alignment.Fortress,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Stone,
        chance: 20
      }
    ],
    graphics: "CGBASI.DEF"
  },
  [Creature.Wyvern]: {
    level: 6,
    faction: Alignment.Fortress,
    upgradesTo: Creature.WyvernMonarch,
    abilities: [],
    graphics: "CWYVER.DEF"
  },
  [Creature.WyvernMonarch]: {
    level: 6,
    faction: Alignment.Fortress,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Poison,
        chance: 50
      }
    ],
    graphics: "CWYVMN.DEF"
  },
  [Creature.Hydra]: {
    level: 7,
    faction: Alignment.Fortress,
    abilities: [
      {
        type: TraitType.BLOCKS_RETALIATION
      },
      {
        type: TraitType.ATTACKS_ALL_ADJACENT
      }
    ],
    upgradesTo: Creature.ChaosHydra,
    graphics: "CHYDRA.DEF"
  },
  [Creature.ChaosHydra]: {
    level: 7,
    faction: Alignment.Fortress,
    abilities: [
      {
        type: TraitType.BLOCKS_RETALIATION
      },
      {
        type: TraitType.ATTACKS_ALL_ADJACENT
      }
    ],
    graphics: "CCHYDR.DEF"
  },
  [Creature.Imp]: {
    level: 1,
    faction: Alignment.Inferno,
    upgradesTo: Creature.Familiar,
    abilities: [],
    graphics: "CIMP.DEF"
  },
  [Creature.Familiar]: {
    level: 1,
    faction: Alignment.Inferno,
    abilities: [
      {
        type: TraitType.MANA_CHANNELING,
        percent: 20
      }
    ],
    graphics: "CFAMIL.DEF"
  },
  [Creature.Gog]: {
    level: 2,
    faction: Alignment.Inferno,
    upgradesTo: Creature.Magog,
    abilities: [],
    graphics: "CGOG.DEF",
    missileGraphics: "CPRGOGX.DEF"
  },
  [Creature.Magog]: {
    level: 2,
    faction: Alignment.Inferno,
    abilities: [
      {
        type: TraitType.SPELL_LIKE_ATTACK,
        spell: Spell.Fireball
      }
    ],
    graphics: "CMAGOG.DEF",
    missileGraphics: "CPRGOGX.DEF"
  },
  [Creature.HellHound]: {
    level: 3,
    faction: Alignment.Inferno,
    upgradesTo: Creature.Cerberus,
    abilities: [],
    graphics: "CHHOUN.DEF"
  },
  [Creature.Cerberus]: {
    level: 3,
    faction: Alignment.Inferno,
    abilities: [
      {
        type: TraitType.THREE_HEADED_ATTACK
      },
      {
        type: TraitType.BLOCKS_RETALIATION
      }
    ],
    graphics: "CCERBU.DEF"
  },
  [Creature.Demon]: {
    level: 4,
    faction: Alignment.Inferno,
    upgradesTo: Creature.HornedDemon,
    abilities: [],
    graphics: "COHDEM.DEF"
  },
  [Creature.HornedDemon]: {
    level: 4,
    faction: Alignment.Inferno,
    abilities: [],
    graphics: "CTHDEM.DEF"
  },
  [Creature.PitFiend]: {
    level: 5,
    faction: Alignment.Inferno,
    upgradesTo: Creature.PitLord,
    abilities: [],
    graphics: "CPFIEN.DEF"
  },
  [Creature.PitLord]: {
    level: 5,
    faction: Alignment.Inferno,
    abilities: [
      {
        type: TraitType.DAEMON_SUMMONING,
        creature: Creature.Demon,
        hp: 50
      },
      {
        type: TraitType.CASTS,
        amount: 1
      }
    ],
    graphics: "CPFOE.DEF"
  },
  [Creature.Efreeti]: {
    level: 6,
    faction: Alignment.Inferno,
    abilities: [
      {
        type: TraitType.HATE,
        creature: Creature.Genie,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.MasterGenie,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.FLYING
      },
      {
        type: TraitType.FIRE_IMMUNITY,
        immuneTo: ImmunityType.All
      }
    ],
    upgradesTo: Creature.EfreetSultan,
    graphics: "CEFREE.DEF"
  },
  [Creature.EfreetSultan]: {
    level: 6,
    faction: Alignment.Inferno,
    abilities: [
      {
        type: TraitType.HATE,
        creature: Creature.Genie,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.MasterGenie,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.FLYING
      },
      {
        type: TraitType.FIRE_IMMUNITY,
        immuneTo: ImmunityType.All
      },
      {
        type: TraitType.FIRE_SHIELD,
        value: 30
      }
    ],
    graphics: "CEFRES.DEF"
  },
  [Creature.Devil]: {
    level: 7,
    faction: Alignment.Inferno,
    abilities: [
      {
        type: TraitType.HATE,
        creature: Creature.Angel,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.Archangel,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.TELEPORT
      },
      {
        type: TraitType.LUCK,
        effectRange: EffectRange.ONLY_ENEMY_ARMY,
        value: -1
      },
      {
        type: TraitType.BLOCKS_RETALIATION
      }
    ],
    upgradesTo: Creature.ArchDevil,
    graphics: "CDEVIL.DEF"
  },
  [Creature.ArchDevil]: {
    level: 7,
    faction: Alignment.Inferno,
    abilities: [
      {
        type: TraitType.HATE,
        creature: Creature.Angel,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.Archangel,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.TELEPORT
      },
      {
        type: TraitType.LUCK,
        effectRange: EffectRange.ONLY_ENEMY_ARMY,
        value: -1
      },
      {
        type: TraitType.BLOCKS_RETALIATION
      }
    ],
    graphics: "CADEVL.DEF"
  },
  [Creature.Skeleton]: {
    level: 1,
    faction: Alignment.Necropolis,
    upgradesTo: Creature.SkeletonWarrior,
    abilities: [],
    graphics: "CSKELE.DEF"
  },
  [Creature.SkeletonWarrior]: {
    level: 1,
    faction: Alignment.Necropolis,
    abilities: [],
    graphics: "CWSKEL.DEF"
  },
  [Creature.WalkingDead]: {
    level: 2,
    faction: Alignment.Necropolis,
    upgradesTo: Creature.Zombie,
    abilities: [],
    graphics: "CZOMBI.DEF"
  },
  [Creature.Zombie]: {
    level: 2,
    faction: Alignment.Necropolis,
    graphics: "CZOMLO.DEF",
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Disease,
        chance: 20
      }
    ]
  },
  [Creature.Wight]: {
    level: 3,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.FULL_HP_REGENERATION
      }
    ],
    upgradesTo: Creature.Wraith,
    graphics: "CWIGHT.DEF"
  },
  [Creature.Wraith]: {
    level: 3,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.FULL_HP_REGENERATION
      },
      {
        type: TraitType.MANA_DRAIN,
        points: 2
      }
    ],
    graphics: "CWRAIT.DEF"
  },
  [Creature.Vampire]: {
    level: 4,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.BLOCKS_RETALIATION
      }
    ],
    upgradesTo: Creature.VampireLord,
    graphics: "CVAMP.DEF"
  },
  [Creature.VampireLord]: {
    level: 4,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.BLOCKS_RETALIATION
      },
      {
        type: TraitType.LIFE_DRAIN,
        points: 100
      }
    ],
    graphics: "CNOSFE.DEF"
  },
  [Creature.Lich]: {
    level: 5,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.SPELL_LIKE_ATTACK,
        spell: Spell.DeathCloud
      }
    ],
    upgradesTo: Creature.PowerLich,
    graphics: "CLICH.DEF",
    missileGraphics: "PLICH.DEF"
  },
  [Creature.PowerLich]: {
    level: 5,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.SPELL_LIKE_ATTACK,
        spell: Spell.DeathCloud
      }
    ],
    graphics: "CPLICH.DEF",
    missileGraphics: "PLICH.DEF"
  },
  [Creature.BlackKnight]: {
    level: 6,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Curse,
        chance: 20
      }
    ],
    upgradesTo: Creature.DreadKnight,
    graphics: "CBKNIG.DEF"
  },
  [Creature.DreadKnight]: {
    level: 6,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Curse,
        chance: 20
      },
      {
        type: TraitType.DOUBLE_DAMAGE_CHANCE,
        chance: 20
      }
    ],
    graphics: "CBLORD.DEF"
  },
  [Creature.BoneDragon]: {
    level: 7,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.MORALE,
        value: -1
      }
    ],
    upgradesTo: Creature.GhostDragon,
    graphics: "CNDRGN.DEF"
  },
  [Creature.GhostDragon]: {
    level: 7,
    faction: Alignment.Necropolis,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.MORALE,
        value: -1
      },
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Aging,
        chance: 20
      }
    ],
    graphics: "CHDRGN.DEF"
  },
  [Creature.GoldGolem]: {
    level: 4,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.SPELL_DAMAGE_REDUCTION,
        school: -1,
        percent: 85
      },
      {
        type: TraitType.NON_LIVING
      }
    ],
    graphics: "CGGOLE.DEF"
  },
  [Creature.DiamondGolem]: {
    level: 5,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.SPELL_DAMAGE_REDUCTION,
        school: -1,
        percent: 95
      },
      {
        type: TraitType.NON_LIVING
      }
    ],
    graphics: "CDGOLE.DEF"
  },
  [Creature.AzureDragon]: {
    level: 10,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.TWO_HEX_ATTACK_BREATH
      },
      {
        type: TraitType.LEVEL_SPELL_IMMUNITY,
        level: 3
      },
      {
        type: TraitType.FEARLESS
      },
      {
        type: TraitType.FEAR
      }
    ],
    graphics: "CADRGN.DEF"
  },
  [Creature.CrystalDragon]: {
    level: 10,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.MAGIC_RESISTANCE,
        percent: 20
      },
      {
        type: TraitType.GENERATE_RESOURCE,
        resource: Resource.Crystal,
        amount: 1
      }
    ],
    graphics: "CCDRGN.DEF"
  },
  [Creature.FaerieDragon]: {
    level: 8,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.MAGIC_MIRROR,
        chance: 20
      },
      {
        type: TraitType.CASTS,
        amount: 5
      },
      {
        type: TraitType.CREATURE_SPELL_POWER,
        value: 500
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.MagicArrow,
        chance: 22,
        level: 2
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.IceBolt,
        chance: 22,
        level: 2
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.LightningBolt,
        chance: 22,
        level: 2
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.ChainLightning,
        chance: 5,
        level: 2
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.FrostRing,
        chance: 10,
        level: 2
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.Fireball,
        chance: 21,
        level: 2
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.Inferno,
        chance: 5,
        level: 2
      },
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.MeteorShower,
        chance: 5,
        level: 2
      }
    ],
    graphics: "CFDRGN.DEF"
  },
  [Creature.RustDragon]: {
    level: 10,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.ACID_BREATH,
        damage: 25,
        chance: 20
      },
      {
        type: TraitType.TWO_HEX_ATTACK_BREATH
      },
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.AcidBreath,
        chance: 100
      }
    ],
    graphics: "CRSDGN.DEF"
  },
  [Creature.Enchanter]: {
    level: 6,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.NO_WALL_PENALTY
      },
      {
        type: TraitType.CASTS,
        amount: 5
      },
      {
        type: TraitType.ENCHANTER,
        spell: Spell.AirShield,
        level: 3,
        cooldown: 3
      },
      {
        type: TraitType.ENCHANTER,
        spell: Spell.Bless,
        level: 3,
        cooldown: 3
      },
      {
        type: TraitType.ENCHANTER,
        spell: Spell.Weakness,
        level: 3,
        cooldown: 3
      },
      {
        type: TraitType.ENCHANTER,
        spell: Spell.StoneSkin,
        level: 3,
        cooldown: 3
      },
      {
        type: TraitType.ENCHANTER,
        spell: Spell.Slow,
        level: 3,
        cooldown: 3
      },
      {
        type: TraitType.ENCHANTER,
        spell: Spell.Haste,
        level: 3,
        cooldown: 3
      }
    ],
    graphics: "Cench.DEF",
    missileGraphics: "CPRZEAX.DEF"
  },
  [Creature.Sharpshooter]: {
    level: 4,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.NO_WALL_PENALTY
      },
      {
        type: TraitType.NO_DISTANCE_PENALTY
      }
    ],
    graphics: "CSHARP.DEF",
    missileGraphics: "PELFX.DEF"
  },
  [Creature.Halfling]: {
    level: 1,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.SELF_LUCK
      }
    ],
    graphics: "CHALF.DEF",
    missileGraphics: "PHALF.DEF"
  },
  [Creature.Peasant]: {
    level: 1,
    faction: Alignment.Neutral,
    graphics: "CPEAS.DEF",
    abilities: []
  },
  [Creature.Boar]: {
    level: 2,
    faction: Alignment.Neutral,
    graphics: "CBOAR.DEF",
    abilities: []
  },
  [Creature.Mummy]: {
    level: 3,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.UNDEAD
      },
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Curse,
        chance: 50
      }
    ],
    graphics: "CMUMMY.DEF"
  },
  [Creature.Nomad]: {
    level: 3,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.NO_TERRAIN_PENALTY,
        terrain: Terrain.Sand
      }
    ],
    graphics: "CNOMAD.DEF"
  },
  [Creature.Rogue]: {
    level: 2,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.VISIONS
      }
    ],
    graphics: "CROGUE.DEF"
  },
  [Creature.Troll]: {
    level: 5,
    faction: Alignment.Neutral,
    abilities: [
      {
        type: TraitType.FULL_HP_REGENERATION
      }
    ],
    graphics: "CTROLL.DEF"
  },
  [Creature.Centaur]: {
    level: 1,
    faction: Alignment.Rampart,
    upgradesTo: Creature.CentaurCaptain,
    graphics: "CCENTR.DEF",
    abilities: []
  },
  [Creature.CentaurCaptain]: {
    level: 1,
    faction: Alignment.Rampart,
    graphics: "CECENT.DEF",
    abilities: []
  },
  [Creature.Dwarf]: {
    level: 2,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.MAGIC_RESISTANCE,
        percent: 20
      }
    ],
    upgradesTo: Creature.BattleDwarf,
    graphics: "CDWARF.DEF"
  },
  [Creature.BattleDwarf]: {
    level: 2,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.MAGIC_RESISTANCE,
        percent: 40
      }
    ],
    graphics: "CBDWAR.DEF"
  },
  [Creature.WoodElf]: {
    level: 3,
    faction: Alignment.Rampart,
    upgradesTo: Creature.GrandElf,
    graphics: "CELF.DEF",
    missileGraphics: "PELFX.DEF",
    abilities: []
  },
  [Creature.GrandElf]: {
    level: 3,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.ADDITIONAL_ATTACK,
        effectRange: EffectRange.ONLY_DISTANCE_FIGHT
      }
    ],
    graphics: "CGRELF.DEF",
    missileGraphics: "PELFX.DEF"
  },
  [Creature.Pegasus]: {
    level: 4,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.CHANGES_SPELL_COST_FOR_ENEMY,
        points: 2
      }
    ],
    upgradesTo: Creature.SilverPegasus,
    graphics: "CPEGAS.DEF"
  },
  [Creature.SilverPegasus]: {
    level: 4,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.CHANGES_SPELL_COST_FOR_ENEMY,
        points: 2
      }
    ],
    graphics: "CAPEGS.DEF"
  },
  [Creature.DendroidGuard]: {
    level: 5,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Bind,
        chance: 100
      }
    ],
    upgradesTo: Creature.DendroidSoldier,
    graphics: "CTREE.DEF"
  },
  [Creature.DendroidSoldier]: {
    level: 5,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Bind,
        chance: 100
      }
    ],
    graphics: "CBTREE.DEF"
  },
  [Creature.Unicorn]: {
    level: 6,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.SPELL_RESISTANCE_AURA,
        percent: 20
      },
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Blind,
        chance: 20
      }
    ],
    upgradesTo: Creature.WarUnicorn,
    graphics: "CUNICO.DEF"
  },
  [Creature.WarUnicorn]: {
    level: 6,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.SPELL_RESISTANCE_AURA,
        percent: 20
      },
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Blind,
        chance: 20
      }
    ],
    graphics: "CWUNIC.DEF"
  },
  [Creature.GreenDragon]: {
    level: 7,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.TWO_HEX_ATTACK_BREATH
      },
      {
        type: TraitType.LEVEL_SPELL_IMMUNITY,
        level: 3
      }
    ],
    upgradesTo: Creature.GoldDragon,
    graphics: "CGDRAG.DEF"
  },
  [Creature.GoldDragon]: {
    level: 7,
    faction: Alignment.Rampart,
    abilities: [
      {
        type: TraitType.DRAGON_NATURE
      },
      {
        type: TraitType.TWO_HEX_ATTACK_BREATH
      },
      {
        type: TraitType.LEVEL_SPELL_IMMUNITY,
        level: 4
      }
    ],
    graphics: "CDDRAG.DEF"
  },
  [Creature.Goblin]: {
    level: 1,
    faction: Alignment.Stronghold,
    upgradesTo: Creature.Hobgoblin,
    graphics: "CGOBLI.DEF",
    abilities: []
  },
  [Creature.Hobgoblin]: {
    level: 1,
    faction: Alignment.Stronghold,
    graphics: "CHGOBL.DEF",
    abilities: []
  },
  [Creature.WolfRrider]: {
    level: 2,
    faction: Alignment.Stronghold,
    upgradesTo: Creature.WolfRaider,
    graphics: "CBWLFR.DEF",
    abilities: []
  },
  [Creature.WolfRaider]: {
    level: 2,
    faction: Alignment.Stronghold,
    abilities: [
      {
        type: TraitType.ADDITIONAL_ATTACK
      }
    ],
    graphics: "CUWLFR.DEF"
  },
  [Creature.Orc]: {
    level: 3,
    faction: Alignment.Stronghold,
    upgradesTo: Creature.OrcChieftain,
    graphics: "CORC.DEF",
    missileGraphics: "PORCHX.DEF",
    abilities: []
  },
  [Creature.OrcChieftain]: {
    level: 3,
    faction: Alignment.Stronghold,
    graphics: "CORCCH.DEF",
    missileGraphics: "PORCHX.DEF",
    abilities: []
  },
  [Creature.Ogre]: {
    level: 4,
    faction: Alignment.Stronghold,
    upgradesTo: Creature.OgreMage,
    graphics: "COGRE.DEF",
    abilities: []
  },
  [Creature.OgreMage]: {
    level: 4,
    faction: Alignment.Stronghold,
    abilities: [
      {
        type: TraitType.SPELLCASTER,
        spell: Spell.Bloodlust,
        level: 2
      },
      {
        type: TraitType.CASTS,
        amount: 3
      },
      {
        type: TraitType.CREATURE_ENCHANT_POWER,
        duration: 3
      }
    ],
    graphics: "COGMAG.DEF"
  },
  [Creature.Roc]: {
    level: 5,
    faction: Alignment.Stronghold,
    upgradesTo: Creature.Thunderbird,
    graphics: "CROC.DEF",
    abilities: []
  },
  [Creature.Thunderbird]: {
    level: 5,
    faction: Alignment.Stronghold,
    abilities: [
      {
        type: TraitType.SPECIFIC_SPELL_POWER,
        spell: Spell.Thunderbolt,
        value: 10
      },
      {
        type: TraitType.SPELL_AFTER_ATTACK,
        spell: Spell.Thunderbolt,
        chance: 20
      }
    ],
    graphics: "CTBIRD.DEF"
  },
  [Creature.Cyclops]: {
    level: 6,
    faction: Alignment.Stronghold,
    upgradesTo: Creature.CyclopsKing,
    graphics: "CCYCLR.DEF",
    missileGraphics: "PCYCLBX.DEF",
    abilities: []
  },
  [Creature.CyclopsKing]: {
    level: 6,
    faction: Alignment.Stronghold,
    abilities: [
      {
        type: TraitType.CATAPULT_EXTRA_SHOTS,
        amount: 1
      }
    ],
    graphics: "CCYCLLOR.DEF",
    missileGraphics: "PCYCLBX.DEF"
  },
  [Creature.Behemoth]: {
    level: 7,
    faction: Alignment.Stronghold,
    abilities: [
      {
        type: TraitType.ENEMY_DEFENCE_REDUCTION,
        percent: 40
      }
    ],
    upgradesTo: Creature.AncientBehemoth,
    graphics: "CYBEHE.DEF"
  },
  [Creature.AncientBehemoth]: {
    level: 7,
    faction: Alignment.Stronghold,
    abilities: [
      {
        type: TraitType.ENEMY_DEFENCE_REDUCTION,
        percent: 80
      }
    ],
    graphics: "CABEHE.DEF"
  },
  [Creature.Gremlin]: {
    level: 1,
    faction: Alignment.Tower,
    upgradesTo: Creature.MasterGremlin,
    graphics: "CGREMA.DEF",
    abilities: []
  },
  [Creature.MasterGremlin]: {
    level: 1,
    faction: Alignment.Tower,
    graphics: "CGREMM.DEF",
    missileGraphics: "CPRGRE.DEF",
    abilities: []
  },
  [Creature.StoneGargoyle]: {
    level: 2,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.NON_LIVING
      }
    ],
    upgradesTo: Creature.ObsidianGargoyle,
    graphics: "CGARGO.DEF"
  },
  [Creature.ObsidianGargoyle]: {
    level: 2,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.NON_LIVING
      }
    ],
    graphics: "COGARG.DEF"
  },
  [Creature.StoneGolem]: {
    level: 3,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.SPELL_DAMAGE_REDUCTION,
        school: -1,
        percent: 50
      },
      {
        type: TraitType.NON_LIVING
      }
    ],
    upgradesTo: Creature.IronGolem,
    graphics: "CSGOLE.DEF"
  },
  [Creature.IronGolem]: {
    level: 3,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.SPELL_DAMAGE_REDUCTION,
        school: -1, // TODO
        percent: 75
      },
      {
        type: TraitType.NON_LIVING
      }
    ],
    graphics: "CIGOLE.DEF"
  },
  [Creature.Mage]: {
    level: 4,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.CHANGES_SPELL_COST_FOR_ALLY,
        points: 2
      }
    ],
    upgradesTo: Creature.ArchMage,
    graphics: "CMAGE.DEF",
    missileGraphics: "PMAGEX.DEF"
  },
  [Creature.ArchMage]: {
    level: 4,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.CHANGES_SPELL_COST_FOR_ALLY,
        points: 2
      }
    ],
    graphics: "CAMAGE.DEF",
    missileGraphics: "PMAGEX.DEF"
  },
  [Creature.Genie]: {
    level: 5,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.HATE,
        creature: Creature.Efreeti,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.EfreetSultan,
        damageMultiplier: 1.5
      }
    ],
    upgradesTo: Creature.MasterGenie,
    graphics: "CGENIE.DEF"
  },
  [Creature.MasterGenie]: {
    level: 5,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.HATE,
        creature: Creature.Efreeti,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.HATE,
        creature: Creature.EfreetSultan,
        damageMultiplier: 1.5
      },
      {
        type: TraitType.CREATURE_ENCHANT_POWER,
        duration: 5
      },
      {
        type: TraitType.RANDOM_SPELLCASTER,
        level: 2
      },
      {
        type: TraitType.CASTS,
        amount: 3
      }
    ],
    graphics: "CSULTA.DEF"
  },
  [Creature.Naga]: {
    level: 6,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.BLOCKS_RETALIATION
      }
    ],
    upgradesTo: Creature.NagaQueen,
    graphics: "CNAGA.DEF"
  },
  [Creature.NagaQueen]: {
    level: 6,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.BLOCKS_RETALIATION
      }
    ],
    graphics: "CNAGAG.DEF"
  },
  [Creature.Giant]: {
    level: 7,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.MIND_IMMUNITY
      }
    ],
    upgradesTo: Creature.Titan,
    graphics: "CLTITA.DEF"
  },
  [Creature.Titan]: {
    level: 7,
    faction: Alignment.Tower,
    abilities: [
      {
        type: TraitType.MIND_IMMUNITY
      },
      {
        type: TraitType.HATE,
        creature: Creature.BlackDragon,
        damageMultiplier: 0.5
      }
    ],
    graphics: "CGTITA.DEF",
    missileGraphics: "CPRGTIX.DEF"
  }
};
