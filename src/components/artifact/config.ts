import {
  Artifact,
  PrimarySkill,
  SecondarySkillType,
  Spell,
  Resource,
  Creature
} from "homm3-parsers";
import { ArtifactConfig } from "../../contracts/artifact";
import { TraitType } from "../../contracts/traits";

/*
export const artifactConfig: Record<Artifact, ArtifactConfig> = {
  [Artifact.Spellbook]: {
    bonuses: []
  },
  [Artifact.SpellScroll]: { bonuses: [] },
  [Artifact.Grail]: { bonuses: [] },
  [Artifact.Catapult]: {
    bonuses: []
    // warMachine: "catapult"
  },
  [Artifact.Ballista]: {
    bonuses: []
    // warMachine: "ballista"
  },
  [Artifact.AmmoCart]: {
    bonuses: []
    // warMachine: "ammoCart"
  },
  [Artifact.FirstAidTent]: {
    bonuses: []
    // warMachine: "firstAidTent"
  },
  [Artifact.CentaurAxe]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 2
      }
    ]
  },
  [Artifact.BlackshardOfTheDeadKnight]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 3
      }
    ]
  },
  [Artifact.GreaterGnollsFlail]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 4
      }
    ]
  },
  [Artifact.OgresClubOfHavoc]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 5
      }
    ]
  },
  [Artifact.SwordOfHellfire]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 6
      }
    ]
  },
  [Artifact.TitansGladius]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 12
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: -3
      }
    ]
  },
  [Artifact.ShieldOfTheDwarvenLords]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 2
      }
    ]
  },
  [Artifact.ShieldOfTheYawningDead]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 3
      }
    ]
  },
  [Artifact.BucklerOfTheGnollKing]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 4
      }
    ]
  },
  [Artifact.TargOfTheRampagingOgre]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 5
      }
    ]
  },
  [Artifact.ShieldOfTheDamned]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 6
      }
    ]
  },
  [Artifact.SentinelsShield]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 12
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: -3
      }
    ]
  },
  [Artifact.HelmOfTheAlabasterUnicorn]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 1
      }
    ]
  },
  [Artifact.SkullHelmet]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 2
      }
    ]
  },
  [Artifact.HelmOfChaos]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 3
      }
    ]
  },
  [Artifact.CrownOfTheSupremeMagi]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 4
      }
    ]
  },
  [Artifact.HellstormHelmet]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 5
      }
    ]
  },
  [Artifact.ThunderHelmet]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 10
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: -2
      }
    ]
  },
  [Artifact.BreastplateOfPetrifiedWood]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 1
      }
    ]
  },
  [Artifact.RibCage]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 2
      }
    ]
  },
  [Artifact.ScalesOfTheGreaterBasilisk]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 3
      }
    ]
  },
  [Artifact.TunicOfTheCyclopsKing]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 4
      }
    ]
  },
  [Artifact.BreastplateOfBrimstone]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 5
      }
    ]
  },
  [Artifact.TitansCuirass]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 10
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: -2
      }
    ]
  },
  [Artifact.ArmorOfWonder]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 1
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 1
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 1
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 1
      }
    ]
  },
  [Artifact.SandalsOfTheSaint]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 2
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 2
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 2
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 2
      }
    ]
  },
  [Artifact.CelestialNecklaceOfBliss]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 3
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 3
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 3
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 3
      }
    ]
  },
  [Artifact.LionsShieldOfCourage]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 4
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 4
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 4
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 4
      }
    ]
  },
  [Artifact.SwordOfJudgement]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 5
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 5
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 5
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 5
      }
    ]
  },
  [Artifact.HelmOfHeavenlyEnlightenment]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 6
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 6
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 6
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 6
      }
    ]
  },
  [Artifact.QuietEyeOfTheDragon]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 1
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 1
      }
    ]
  },
  [Artifact.RedDragonFlameTongue]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 2
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 2
      }
    ]
  },
  [Artifact.DragonScaleShield]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 3
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 3
      }
    ]
  },
  [Artifact.DragonScaleArmor]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Attack,
        value: 4
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Defence,
        value: 4
      }
    ]
  },
  [Artifact.DragonboneGreaves]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 1
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 1
      }
    ]
  },
  [Artifact.DragonWingTabard]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 2
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 2
      }
    ]
  },
  [Artifact.NecklaceOfDragonteeth]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 3
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 3
      }
    ]
  },
  [Artifact.CrownOfDragontooth]: {
    bonuses: [
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.SpellPower,
        value: 4
      },
      {
        type: TraitType.PRIMARY_SKILL,
        skill: PrimarySkill.Knowledge,
        value: 4
      }
    ]
  },
  [Artifact.StillEyeOfTheDragon]: {
    bonuses: [
      {
        type: TraitType.MORALE,
        value: 1
      },
      {
        type: TraitType.LUCK,
        value: 1
      }
    ]
  },
  [Artifact.CloverOfFortune]: {
    bonuses: [
      {
        type: TraitType.LUCK,
        value: 1
      }
    ]
  },
  [Artifact.CardsOfProphecy]: {
    bonuses: [
      {
        type: TraitType.LUCK,
        value: 1
      }
    ]
  },
  [Artifact.LadybirdOfLuck]: {
    bonuses: [
      {
        type: TraitType.LUCK,
        value: 1
      }
    ]
  },
  [Artifact.BadgeOfCourage]: {
    bonuses: [
      {
        type: TraitType.MORALE,
        value: 1
      },
      {
        type: TraitType.MIND_IMMUNITY
      }
    ]
  },
  [Artifact.CrestOfValor]: {
    bonuses: [
      {
        type: TraitType.MORALE,
        value: 1
      }
    ]
  },
  [Artifact.GlyphOfGallantry]: {
    bonuses: [
      {
        type: TraitType.MORALE,
        value: 1
      }
    ]
  },
  [Artifact.Speculum]: {
    bonuses: [
      {
        type: TraitType.SIGHT_RADIOUS,
        value: 1
      }
    ]
  },
  [Artifact.Spyglass]: {
    bonuses: [
      {
        type: TraitType.SIGHT_RADIOUS,
        value: 1
      }
    ]
  },
  [Artifact.AmuletOfTheUndertaker]: {
    bonuses: [
      {
        skill: SecondarySkillType.Necromancy,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 5
      }
    ]
  },
  [Artifact.VampiresCowl]: {
    bonuses: [
      {
        skill: SecondarySkillType.Necromancy,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 10
      }
    ]
  },
  [Artifact.DeadMansBoots]: {
    bonuses: [
      {
        skill: SecondarySkillType.Necromancy,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 15
      }
    ]
  },
  [Artifact.GarnitureOfInterference]: {
    bonuses: [
      {
        type: TraitType.MAGIC_RESISTANCE,
        percent: 5
      }
    ]
  },
  [Artifact.SurcoatOfCounterpoise]: {
    bonuses: [
      {
        type: TraitType.MAGIC_RESISTANCE,
        percent: 10
      }
    ]
  },
  [Artifact.BootsOfPolarity]: {
    bonuses: [
      {
        type: TraitType.MAGIC_RESISTANCE,
        percent: 15
      }
    ]
  },
  [Artifact.BowOfElvenCherrywood]: {
    bonuses: [
      {
        skill: SecondarySkillType.Archery,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 5
      }
    ]
  },
  [Artifact.BowstringOfTheUnicornsMane]: {
    bonuses: [
      {
        skill: SecondarySkillType.Archery,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 10
      }
    ]
  },
  [Artifact.AngelFeatherArrows]: {
    bonuses: [
      {
        skill: SecondarySkillType.Archery,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 15
      }
    ]
  },
  [Artifact.BirdOfPerception]: {
    bonuses: [
      {
        skill: SecondarySkillType.EagleEye,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 5
      }
    ]
  },
  [Artifact.StoicWatchman]: {
    bonuses: [
      {
        skill: SecondarySkillType.EagleEye,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 10
      }
    ]
  },
  [Artifact.EmblemOfCognizance]: {
    bonuses: [
      {
        skill: SecondarySkillType.EagleEye,
        type: TraitType.SECONDARY_SKILL_PREMY,
        percent: 15
      }
    ]
  },
  [Artifact.StatesmansMedal]: {
    bonuses: [
      {
        type: TraitType.SURRENDER_DISCOUNT,
        percent: 10
      }
    ]
  },
  [Artifact.DiplomatsRing]: {
    bonuses: [
      {
        type: TraitType.SURRENDER_DISCOUNT,
        percent: 10
      }
    ]
  },
  [Artifact.AmbassadorsSash]: {
    bonuses: [
      {
        type: TraitType.SURRENDER_DISCOUNT,
        percent: 10
      }
    ]
  },
  [Artifact.RingOfTheWayfarer]: {
    bonuses: [
      {
        type: TraitType.STACKS_SPEED,
        amount: 1
      }
    ]
  },
  [Artifact.EquestriansGloves]: {
    bonuses: [
      {
        type: TraitType.LAND_MOVEMENT,
        value: 300
      }
    ]
  },
  [Artifact.NecklaceOfOceanGuidance]: {
    bonuses: [
      {
        type: TraitType.SEA_MOVEMENT,
        value: 1000
      }
    ]
  },
  [Artifact.AngelWings]: {
    bonuses: [
      {
        type: TraitType.FLYING_MOVEMENT,
        penaltyPercent: 0
      }
    ]
  },
  [Artifact.CharmOfMana]: {
    bonuses: [
      {
        type: TraitType.MANA_REGENERATION,
        amount: 1
      }
    ]
  },
  [Artifact.TalismanOfMana]: {
    bonuses: [
      {
        type: TraitType.MANA_REGENERATION,
        amount: 2
      }
    ]
  },
  [Artifact.MysticOrbOfMana]: {
    bonuses: [
      {
        type: TraitType.MANA_REGENERATION,
        amount: 3
      }
    ]
  },
  [Artifact.CollarOfConjuring]: {
    bonuses: [
      {
        type: TraitType.SPELL_DURATION,
        value: 1
      }
    ]
  },
  [Artifact.RingOfConjuring]: {
    bonuses: [
      {
        type: TraitType.SPELL_DURATION,
        value: 2
      }
    ]
  },
  [Artifact.CapeOfConjuring]: {
    bonuses: [
      {
        type: TraitType.SPELL_DURATION,
        value: 3
      }
    ]
  },
  [Artifact.OrbOfTheFirmament]: {
    bonuses: [
      {
        type: TraitType.AIR_SPELL_DMG_PREMY,
        value: 50
      }
    ]
  },
  [Artifact.OrbOfSilt]: {
    bonuses: [
      {
        type: TraitType.EARTH_SPELL_DMG_PREMY,
        value: 50
      }
    ]
  },
  [Artifact.OrbOfTempestuousFire]: {
    bonuses: [
      {
        type: TraitType.FIRE_SPELL_DMG_PREMY,
        value: 50
      }
    ]
  },
  [Artifact.OrbOfDrivingRain]: {
    bonuses: [
      {
        type: TraitType.WATER_SPELL_DMG_PREMY,
        value: 50
      }
    ]
  },
  [Artifact.RecantersCloak]: {
    bonuses: [
      {
        type: TraitType.BLOCK_MAGIC_ABOVE,
        level: 2
      }
    ]
  },
  [Artifact.SpiritOfOppression]: {
    bonuses: [
      {
        type: TraitType.BLOCK_MORALE
      }
    ]
  },
  [Artifact.HourglassOfTheEvilHour]: {
    bonuses: [
      {
        type: TraitType.BLOCK_LUCK
      }
    ]
  },
  [Artifact.TomeOfFireMagic]: {
    bonuses: [
      {
        type: TraitType.FIRE_SPELLS
      }
    ]
  },
  [Artifact.TomeOfAirMagic]: {
    bonuses: [
      {
        type: TraitType.AIR_SPELLS
      }
    ]
  },
  [Artifact.TomeOfWaterMagic]: {
    bonuses: [
      {
        type: TraitType.WATER_SPELLS
      }
    ]
  },
  [Artifact.TomeOfEarthMagic]: {
    bonuses: [
      {
        type: TraitType.EARTH_SPELLS
      }
    ]
  },
  [Artifact.BootsOfLevitation]: {
    bonuses: [
      {
        type: TraitType.WATER_WALKING,
        penaltyPercentage: 0
      }
    ]
  },
  [Artifact.GoldenBow]: {
    bonuses: [
      {
        type: TraitType.NO_DISTANCE_PENALTY
      },
      {
        type: TraitType.NO_WALL_PENALTY
      }
    ]
  },
  [Artifact.SphereOfPermanence]: {
    bonuses: [
      {
        spell: Spell.Dispel,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.OrbOfVulnerability]: {
    bonuses: [
      {
        type: TraitType.NEGATE_ALL_NATURAL_IMMUNITIES
      }
    ]
  },
  [Artifact.RingOfVitality]: {
    bonuses: [
      {
        type: TraitType.STACK_HEALTH,
        amount: 1
      }
    ]
  },
  [Artifact.RingOfLife]: {
    bonuses: [
      {
        type: TraitType.STACK_HEALTH,
        amount: 1
      }
    ]
  },
  [Artifact.VialOfLifeblood]: {
    bonuses: [
      {
        type: TraitType.STACK_HEALTH,
        amount: 2
      }
    ]
  },
  [Artifact.NecklaceOfSwiftness]: {
    bonuses: [
      {
        type: TraitType.STACKS_SPEED,
        amount: 1
      }
    ]
  },
  [Artifact.BootsOfSpeed]: {
    bonuses: [
      {
        type: TraitType.LAND_MOVEMENT,
        value: 600
      }
    ]
  },
  [Artifact.CapeOfVelocity]: {
    bonuses: [
      {
        type: TraitType.STACKS_SPEED,
        amount: 2
      }
    ]
  },
  [Artifact.PendantOfDispassion]: {
    bonuses: [
      {
        spell: Spell.Berserk,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.PendantOfSecondSight]: {
    bonuses: [
      {
        spell: Spell.Blind,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.PendantOfHoliness]: {
    bonuses: [
      {
        spell: Spell.Curse,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.PendantOfLife]: {
    bonuses: [
      {
        spell: Spell.DeathRipple,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.PendantOfDeath]: {
    bonuses: [
      {
        spell: Spell.DestroyUndead,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.PendantOfFreeWill]: {
    bonuses: [
      {
        spell: Spell.Hypnotize,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.PendantOfNegativity]: {
    bonuses: [
      {
        spell: Spell.LightningBolt,
        type: TraitType.SPELL_IMMUNITY
      },
      {
        spell: Spell.ChainLightning,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.PendantOfTotalRecall]: {
    bonuses: [
      {
        spell: Spell.Forgetfulness,
        type: TraitType.SPELL_IMMUNITY
      }
    ]
  },
  [Artifact.PendantOfCourage]: {
    bonuses: [
      {
        type: TraitType.MORALE,
        value: 3
      },
      {
        type: TraitType.LUCK,
        value: 3
      }
    ]
  },
  [Artifact.EverflowingCrystalCloak]: {
    bonuses: [
      {
        resource: Resource.Crystal,
        type: TraitType.GENERATE_RESOURCE,
        amount: 1
      }
    ]
  },
  [Artifact.RingOfInfiniteGems]: {
    bonuses: [
      {
        resource: Resource.Gems,
        type: TraitType.GENERATE_RESOURCE,
        amount: 1
      }
    ]
  },
  [Artifact.EverpouringVialOfMercury]: {
    bonuses: [
      {
        resource: Resource.Mercury,
        type: TraitType.GENERATE_RESOURCE,
        amount: 1
      }
    ]
  },
  [Artifact.InexhaustibleCartOfOre]: {
    bonuses: [
      {
        resource: Resource.Ore,
        type: TraitType.GENERATE_RESOURCE,
        amount: 1
      }
    ]
  },
  [Artifact.EversmokingRingOfSulfur]: {
    bonuses: [
      {
        resource: Resource.Sulfur,
        type: TraitType.GENERATE_RESOURCE,
        amount: 1
      }
    ]
  },
  [Artifact.InexhaustibleCartOfLumber]: {
    bonuses: [
      {
        resource: Resource.Wood,
        type: TraitType.GENERATE_RESOURCE,
        amount: 1
      }
    ]
  },
  [Artifact.EndlessSackOfGold]: {
    bonuses: [
      {
        resource: Resource.Gold,
        type: TraitType.GENERATE_RESOURCE,
        amount: 1000
      }
    ]
  },
  [Artifact.EndlessBagOfGold]: {
    bonuses: [
      {
        resource: Resource.Gold,
        type: TraitType.GENERATE_RESOURCE,
        amount: 750
      }
    ]
  },
  [Artifact.EndlessPurseOfGold]: {
    bonuses: [
      {
        resource: Resource.Gold,
        type: TraitType.GENERATE_RESOURCE,
        amount: 500
      }
    ]
  },
  [Artifact.LegsOfLegion]: {
    bonuses: [
      {
        type: TraitType.CREATURE_GROWTH,
        level: 1,
        value: 5
      }
    ]
  },
  [Artifact.LoinsOfLegion]: {
    bonuses: [
      {
        type: TraitType.CREATURE_GROWTH,
        level: 2,
        value: 4
      }
    ]
  },
  [Artifact.TorsoOfLegion]: {
    bonuses: [
      {
        type: TraitType.CREATURE_GROWTH,
        level: 3,
        value: 3
      }
    ]
  },
  [Artifact.ArmsOfLegion]: {
    bonuses: [
      {
        type: TraitType.CREATURE_GROWTH,
        level: 4,
        value: 2
      }
    ]
  },
  [Artifact.HeadOfLegion]: {
    bonuses: [
      {
        type: TraitType.CREATURE_GROWTH,
        level: 5,
        value: 1
      }
    ]
  },
  [Artifact.SeaCaptainsHat]: {
    bonuses: [
      {
        type: TraitType.WHIRLPOOL_PROTECTION
      },
      {
        type: TraitType.SEA_MOVEMENT,
        value: 500
      },
      {
        spell: Spell.SummonBoat,
        type: TraitType.SPELL,
        level: 3
      },
      {
        spell: Spell.ScuttleBoat,
        type: TraitType.SPELL,
        level: 3
      }
    ]
  },
  [Artifact.SpellbindersHat]: {
    bonuses: [
      {
        level: 5,
        type: TraitType.SPELLS_OF_LEVEL,
        skillLevel: 3
      }
    ]
  },
  [Artifact.ShacklesOfWar]: {
    bonuses: [
      {
        type: TraitType.BATTLE_NO_FLEEING
      }
    ]
  },
  [Artifact.OrbOfInhibition]: {
    bonuses: [
      {
        type: TraitType.BLOCK_ALL_MAGIC
      }
    ]
  },
  [Artifact.VialOfDragonBlood]: {
    bonuses: [
      {
        limiters: [TraitType.DRAGON_NATURE],
        skill: PrimarySkill.Attack,
        type: TraitType.PRIMARY_SKILL,
        value: 5
      },
      {
        limiters: [TraitType.DRAGON_NATURE],
        skill: PrimarySkill.Defence,
        type: TraitType.PRIMARY_SKILL,
        value: 5
      }
    ]
  },
  [Artifact.ArmageddonsBlade]: {
    bonuses: [
      {
        spell: Spell.Armageddon,
        type: TraitType.SPELL,
        level: 3
      },
      {
        spell: Spell.Armageddon,
        type: TraitType.SPELL_IMMUNITY
      },
      {
        skill: PrimarySkill.Attack,
        type: TraitType.PRIMARY_SKILL,
        value: 3
      },
      {
        skill: PrimarySkill.Defence,
        type: TraitType.PRIMARY_SKILL,
        value: 3
      },
      {
        skill: PrimarySkill.SpellPower,
        type: TraitType.PRIMARY_SKILL,
        value: 3
      },
      {
        skill: PrimarySkill.Knowledge,
        type: TraitType.PRIMARY_SKILL,
        value: 6
      }
    ]
  },
  [Artifact.AngelicAlliance]: {
    bonuses: [
      {
        type: TraitType.NONEVIL_ALIGNMENT_MIX
      },
      {
        spell: Spell.Prayer,
        type: TraitType.OPENING_BATTLE_SPELL,
        spellPower: 10
      }
    ],

    components: [
      Artifact.ArmorOfWonder,
      Artifact.SandalsOfTheSaint,
      Artifact.CelestialNecklaceOfBliss,
      Artifact.LionsShieldOfCourage,
      Artifact.SwordOfJudgement,
      Artifact.HelmOfHeavenlyEnlightenment
    ]
  },
  [Artifact.CloakOfTheUndeadKing]: {
    bonuses: [
      {
        type: TraitType.IMPROVED_NECROMANCY,
        subtype: Creature.WalkingDead,
        level: 1
      },
      {
        type: TraitType.IMPROVED_NECROMANCY,
        subtype: Creature.Wight,
        level: 2
      },
      {
        type: TraitType.IMPROVED_NECROMANCY,
        subtype: Creature.Lich,
        level: 3
      }
    ],

    components: [
      Artifact.AmuletOfTheUndertaker,
      Artifact.VampiresCowl,
      Artifact.DeadMansBoots
    ]
  },
  [Artifact.ElixirOfLife]: {
    // TODO
    bonuses: [
      // {
      //   type: TraitType.STACK_HEALTH,
      //   percent: 25,
      //   valuetype: TraitType.PERCENT_TO_BASE
      // },
      // {
      //   type: TraitType.STACK_HEALTH,
      //   val: -25,
      //   valuetype: TraitType.PERCENT_TO_BASE,
      //   limiters: ["UNDEAD"]
      // },
      // {
      //   type: TraitType.HP_REGENERATION,
      //   val: 50
      // },
      // {
      //   type: TraitType.HP_REGENERATION,
      //   val: -50,
      //   limiters: ["UNDEAD"]
      // }
    ],

    components: [
      Artifact.RingOfVitality,
      Artifact.RingOfLife,
      Artifact.VialOfLifeblood
    ]
  },
  [Artifact.ArmorOfTheDamned]: {
    bonuses: [
      {
        spell: Spell.Slow,
        type: TraitType.OPENING_BATTLE_SPELL,
        spellPower: 50
      },
      {
        spell: Spell.Curse,
        type: TraitType.OPENING_BATTLE_SPELL,
        spellPower: 50
      },
      {
        spell: Spell.Weakness,
        type: TraitType.OPENING_BATTLE_SPELL,
        spellPower: 50
      },
      {
        spell: Spell.Misfortune,
        type: TraitType.OPENING_BATTLE_SPELL,
        spellPower: 50
      }
    ],

    components: [
      Artifact.BlackshardOfTheDeadKnight,
      Artifact.ShieldOfTheYawningDead,
      Artifact.SkullHelmet,
      Artifact.RibCage
    ]
  },
  [Artifact.StatueOfLegion]: {
    components: [
      Artifact.LegsOfLegion,
      Artifact.LoinsOfLegion,
      Artifact.TorsoOfLegion,
      Artifact.ArmsOfLegion,
      Artifact.HeadOfLegion
    ],
    bonuses: [
      {
        type: TraitType.CREATURE_GROWTH_PERCENT,
        percent: 50
      }
    ]
  },
  [Artifact.PowerOfTheDragonFather]: {
    bonuses: [
      {
        type: TraitType.LEVEL_SPELL_IMMUNITY,
        level: 4
      },
      {
        skill: PrimarySkill.Attack,
        type: TraitType.PRIMARY_SKILL,
        value: 6
      },
      {
        skill: PrimarySkill.Defence,
        type: TraitType.PRIMARY_SKILL,
        value: 6
      },
      {
        skill: PrimarySkill.SpellPower,
        type: TraitType.PRIMARY_SKILL,
        value: 6
      },
      {
        skill: PrimarySkill.Knowledge,
        type: TraitType.PRIMARY_SKILL,
        value: 6
      }
    ],
    components: [
      Artifact.QuietEyeOfTheDragon,
      Artifact.RedDragonFlameTongue,
      Artifact.DragonScaleShield,
      Artifact.DragonScaleArmor,
      Artifact.DragonboneGreaves,
      Artifact.DragonWingTabard,
      Artifact.NecklaceOfDragonteeth,
      Artifact.CrownOfDragontooth,
      Artifact.StillEyeOfTheDragon
    ]
  },
  [Artifact.TitansThunder]: {
    bonuses: [
      {
        spell: Spell.TitansLightningBolt,
        type: TraitType.SPELL,
        level: 3
      }
    ],

    components: [
      Artifact.TitansGladius,
      Artifact.SentinelsShield,
      Artifact.ThunderHelmet,
      Artifact.TitansCuirass
    ]
  },
  [Artifact.AdmiralsHat]: {
    bonuses: [
      {
        type: TraitType.FREE_SHIP_BOARDING
      }
    ],

    components: [Artifact.NecklaceOfOceanGuidance, Artifact.SeaCaptainsHat]
  },
  [Artifact.BowOfTheSharpshooter]: {
    bonuses: [
      {
        type: TraitType.NO_DISTANCE_PENALTY
      },
      {
        type: TraitType.NO_WALL_PENALTY
      },
      {
        type: TraitType.FREE_SHOOTING
      }
    ],

    components: [
      Artifact.BowOfElvenCherrywood,
      Artifact.BowstringOfTheUnicornsMane,
      Artifact.AngelFeatherArrows
    ]
  },
  [Artifact.WizardsWell]: {
    bonuses: [
      {
        type: TraitType.FULL_MANA_REGENERATION
      }
    ],

    components: [
      Artifact.CharmOfMana,
      Artifact.TalismanOfMana,
      Artifact.MysticOrbOfMana
    ]
  },
  [Artifact.RingOfTheMagi]: {
    bonuses: [
      {
        type: TraitType.SPELL_DURATION,
        value: 50
      }
    ],

    components: [
      Artifact.CollarOfConjuring,
      Artifact.RingOfConjuring,
      Artifact.CapeOfConjuring
    ]
  },
  [Artifact.Cornucopia]: {
    bonuses: [
      {
        resource: Resource.Crystal,
        type: TraitType.GENERATE_RESOURCE,
        amount: 4
      },
      {
        resource: Resource.Gems,
        type: TraitType.GENERATE_RESOURCE,
        amount: 4
      },
      {
        resource: Resource.Mercury,
        type: TraitType.GENERATE_RESOURCE,
        amount: 4
      },
      {
        resource: Resource.Sulfur,
        type: TraitType.GENERATE_RESOURCE,
        amount: 4
      }
    ],

    components: [
      Artifact.EverflowingCrystalCloak,
      Artifact.RingOfInfiniteGems,
      Artifact.EverpouringVialOfMercury,
      Artifact.EversmokingRingOfSulfur
    ]
  },
  [Artifact.MagicWand]: {
    bonuses: [
      {
        type: TraitType.CASTS,
        amount: 10
      },
      {
        spell: Spell.Implosion,
        type: TraitType.SPELLCASTER
      },
      {
        spell: Spell.Fireball,
        type: TraitType.SPELLCASTER
      },
      {
        type: TraitType.RANDOM_SPELLCASTER
      },
      {
        creature: Creature.VampireLord,
        type: TraitType.DAEMON_SUMMONING,
        unitHP: 10
      },
      {
        cooldown: 2,
        spell: Spell.LightningBolt,
        type: TraitType.ENCHANTER
      },
      // TODO
      // {
      //   subtype: 1,
      //   type: TraitType.REBIRTH,
      //   val: 1
      // },
      {
        type: TraitType.MANA_DRAIN,
        value: 10
      }
      // TODO
      // {
      //   type: TraitType.HEALER,
      //   val: 25
      // }
    ]
  },
  [Artifact.GoldTowerArrow]: {
    bonuses: [
      {
        type: TraitType.NO_DISTANCE_PENALTY
      },
      // TODO
      // {
      //   type: TraitType.ADDITIONAL_ATTACK,
      //   val: 2
      // },
      // {
      //   subtype: 22,
      //   type: TraitType.SPELL_LIKE_ATTACK,
      //   val: 1
      // },
      // {
      //   type: TraitType.CATAPULT,
      //   val: 0
      // },
      // {
      //   type: TraitType.ACID_BREATH,
      //   val: 20
      // },
      // {
      //   subtype: 0,
      //   type: TraitType.SHOTS,
      //   val: 200,
      //   valuetype: TraitType.PERCENT_TO_BASE
      // },
      {
        level: 1,
        spell: Spell.Aging,
        type: TraitType.SPELL_BEFORE_ATTACK,
        chance: 50
      },
      {
        level: 1,
        spell: Spell.Berserk,
        type: TraitType.SPELL_AFTER_ATTACK,
        chance: 50
      },
      {
        level: 1,
        spell: Spell.Poison,
        type: TraitType.SPELL_AFTER_ATTACK,
        chance: 50
      },
      {
        level: 1,
        spell: Spell.DisruptingRay,
        type: TraitType.SPELL_AFTER_ATTACK,
        chance: 50
      }
    ]
  },
  [Artifact.MonstersPower]: {
    bonuses: [
      // TODO
      // {
      //   type: TraitType.STACK_HEALTH,
      //   val: 100,
      //   valuetype: TraitType.PERCENT_TO_BASE
      // },
      // {
      //   subtype: 2,
      //   type: TraitType.CREATURE_DAMAGE,
      //   val: 100,
      //   valuetype: TraitType.PERCENT_TO_ALL
      // },
      // {
      //   type: TraitType.HP_REGENERATION,
      //   val: 50
      // },
      {
        type: TraitType.NO_RETALIATION
      },
      {
        type: TraitType.RETURN_AFTER_STRIKE
      },
      {
        type: TraitType.ATTACKS_ALL_ADJACENT
      },
      {
        type: TraitType.SPELL_RESISTANCE_AURA,
        bonus: 100
      },
      {
        type: TraitType.DIRECT_DAMAGE_IMMUNITY
      }
    ]
  }
};
*/
