import { TraitType } from "./traits";
import {
  PrimarySkill,
  SecondarySkillType,
  Spell,
  Resource,
  Artifact,
  Creature
} from "homm3-parsers";

type ArtifactBonus =
  | {
      skill: PrimarySkill;
      type: TraitType.PRIMARY_SKILL;
      value: number;
    }
  | {
      type: TraitType.MORALE;
      value: number;
    }
  | {
      type: TraitType.LUCK;
      value: number;
    }
  | {
      type: TraitType.MIND_IMMUNITY;
    }
  | {
      type: TraitType.SIGHT_RADIOUS;
      value: number;
    }
  | {
      skill: SecondarySkillType;
      type: TraitType.SECONDARY_SKILL_PREMY;
      percent: number;
    }
  | {
      type: TraitType.MAGIC_RESISTANCE;
      percent: number;
    }
  | {
      type: TraitType.SURRENDER_DISCOUNT;
      percent: number;
    }
  | {
      type: TraitType.LAND_MOVEMENT;
      value: number;
    }
  | {
      type: TraitType.SEA_MOVEMENT;
      value: number;
    }
  | {
      type: TraitType.FLYING_MOVEMENT;
      penaltyPercent: number;
    }
  | {
      type: TraitType.MANA_REGENERATION;
      amount: number;
    }
  | {
      type: TraitType.SPELL_DURATION;
      value: number;
    }
  | {
      type: TraitType.EARTH_SPELL_DMG_PREMY;
      value: number;
    }
  | {
      type: TraitType.AIR_SPELL_DMG_PREMY;
      value: number;
    }
  | {
      type: TraitType.FIRE_SPELL_DMG_PREMY;
      value: number;
    }
  | {
      type: TraitType.WATER_SPELL_DMG_PREMY;
      value: number;
    }
  | {
      type: TraitType.BLOCK_MAGIC_ABOVE;
      level: 2;
    }
  | {
      type: TraitType.BLOCK_MORALE;
    }
  | {
      type: TraitType.BLOCK_LUCK;
    }
  | {
      type: TraitType.AIR_SPELLS;
    }
  | {
      type: TraitType.WATER_SPELLS;
    }
  | {
      type: TraitType.EARTH_SPELLS;
    }
  | {
      type: TraitType.FIRE_SPELLS;
    }
  | {
      type: TraitType.WATER_WALKING;
      penaltyPercentage: number;
    }
  | {
      type: TraitType.NO_DISTANCE_PENALTY;
    }
  | {
      type: TraitType.NO_WALL_PENALTY;
    }
  | {
      spell: Spell;
      type: TraitType.SPELL_IMMUNITY;
    }
  | {
      type: TraitType.NEGATE_ALL_NATURAL_IMMUNITIES;
    }
  | {
      type: TraitType.STACK_HEALTH;
      amount: number;
    }
  | {
      type: TraitType.STACKS_SPEED;
      amount: number;
    }
  | {
      resource: Resource;
      type: TraitType.GENERATE_RESOURCE;
      amount: number;
    }
  | {
      type: TraitType.CREATURE_GROWTH;
      level: number;
      value: number;
    }
  | {
      spell: Spell;
      type: TraitType.SPELL;
      level: number;
    }
  | {
      type: TraitType.BATTLE_NO_FLEEING;
    }
  | {
      type: TraitType.BLOCK_ALL_MAGIC;
    }
  | {
      type: TraitType.NONEVIL_ALIGNMENT_MIX;
    }
  | {
      spell: Spell;
      type: TraitType.OPENING_BATTLE_SPELL;
      spellPower: number;
    }
  | {
      type: TraitType.IMPROVED_NECROMANCY;
      subtype: Creature;
      level: number;
    }
  | {
      type: TraitType.WHIRLPOOL_PROTECTION;
    }
  | {
      type: TraitType.NO_RETALIATION;
    }
  | {
      type: TraitType.RETURN_AFTER_STRIKE;
    }
  | {
      type: TraitType.ATTACKS_ALL_ADJACENT;
    }
  | {
      type: TraitType.FREE_SHIP_BOARDING;
    }
  | {
      type: TraitType.FREE_SHOOTING;
    }
  | {
      type: TraitType.FULL_MANA_REGENERATION;
    }
  | {
      level: 1;
      spell: Spell;
      type: TraitType.SPELL_BEFORE_ATTACK | TraitType.SPELL_AFTER_ATTACK;
      chance: 50;
    }
  | {
      type: TraitType.DIRECT_DAMAGE_IMMUNITY;
    }
  | {
      spell: Spell;
      type: TraitType.SPELLCASTER;
    };

export interface ArtifactConfig {
  bonuses: Array<ArtifactBonus>;
  components?: Artifact[];
}
