import { Creature, Spell, Terrain, Resource } from "homm3-parsers";

export enum TraitType {
  LEVEL_COUNTER = "LEVEL_COUNTER" /* for commander artifacts*/,
  MOVEMENT = "MOVEMENT" /*both water/land*/,
  LAND_MOVEMENT = "LAND_MOVEMENT",
  SEA_MOVEMENT = "SEA_MOVEMENT",
  MORALE = "MORALE",
  LUCK = "LUCK",
  PRIMARY_SKILL = "PRIMARY_SKILL" /*uses subtype to pick skill; additional info if set: 1 - only melee, 2 - only distance*/,
  SIGHT_RADIOUS = "SIGHT_RADIOUS" /*the correct word is RADIUS, but this one's already used in mods */,
  MANA_REGENERATION = "MANA_REGENERATION" /*points per turn apart from normal (1 + mysticism)*/,
  FULL_MANA_REGENERATION = "FULL_MANA_REGENERATION" /*all mana points are replenished every day*/,
  NONEVIL_ALIGNMENT_MIX = "NONEVIL_ALIGNMENT_MIX" /*good and neutral creatures can be mixed without morale penalty*/,
  SECONDARY_SKILL_PREMY = "SECONDARY_SKILL_PREMY" /*%*/,
  SURRENDER_DISCOUNT = "SURRENDER_DISCOUNT" /*%*/,
  STACKS_SPEED = "STACKS_SPEED" /*additional info - percent of speed bonus applied after direct bonuses; >0 - added, <0 - subtracted to this part*/,
  FLYING_MOVEMENT = "FLYING_MOVEMENT" /*value - penalty percentage*/,
  SPELL_DURATION = "SPELL_DURATION",
  AIR_SPELL_DMG_PREMY = "AIR_SPELL_DMG_PREMY",
  EARTH_SPELL_DMG_PREMY = "EARTH_SPELL_DMG_PREMY",
  FIRE_SPELL_DMG_PREMY = "FIRE_SPELL_DMG_PREMY",
  WATER_SPELL_DMG_PREMY = "WATER_SPELL_DMG_PREMY",
  WATER_WALKING = "WATER_WALKING" /*value - penalty percentage*/,
  NEGATE_ALL_NATURAL_IMMUNITIES = "NEGATE_ALL_NATURAL_IMMUNITIES",
  STACK_HEALTH = "STACK_HEALTH",
  BLOCK_MORALE = "BLOCK_MORALE",
  BLOCK_LUCK = "BLOCK_LUCK",
  FIRE_SPELLS = "FIRE_SPELLS",
  AIR_SPELLS = "AIR_SPELLS",
  WATER_SPELLS = "WATER_SPELLS",
  EARTH_SPELLS = "EARTH_SPELLS",
  GENERATE_RESOURCE = "GENERATE_RESOURCE" /*daily value, uses subtype (resource type)*/,
  CREATURE_GROWTH = "CREATURE_GROWTH" /*for legion artifacts: value - week growth bonus, subtype - monster level if aplicable*/,
  WHIRLPOOL_PROTECTION = "WHIRLPOOL_PROTECTION" /*hero won't lose army when teleporting through whirlpool*/,
  SPELL = "SPELL" /*hero knows spell, val - skill level (0 - 3), subtype - spell id*/,
  SPELLS_OF_LEVEL = "SPELLS_OF_LEVEL" /*hero knows all spells of given level, val - skill level; subtype - level*/,
  BATTLE_NO_FLEEING = "BATTLE_NO_FLEEING" /*for shackles of war*/,
  MAGIC_SCHOOL_SKILL = "MAGIC_SCHOOL_SKILL" /* //eg. for magic plains terrain, subtype: school of magic (0 - all, 1 - fire, 2 - air, 4 - water, 8 - earth), value - level*/,
  FREE_SHOOTING = "FREE_SHOOTING" /*stacks can shoot even if otherwise blocked (sharpshooter's bow effect)*/,
  OPENING_BATTLE_SPELL = "OPENING_BATTLE_SPELL" /*casts a spell at expert level at beginning of battle, val - spell power, subtype - spell id*/,
  IMPROVED_NECROMANCY = "IMPROVED_NECROMANCY" /* raise more powerful creatures: subtype - creature type raised, addInfo - [required necromancy level, required stack level] */,
  CREATURE_GROWTH_PERCENT = "CREATURE_GROWTH_PERCENT" /*increases growth of all units in all towns, val - percentage*/,
  FREE_SHIP_BOARDING = "FREE_SHIP_BOARDING" /*movement points preserved with ship boarding and landing*/,
  NO_TYPE = "NO_TYPE",
  FLYING = "FLYING",
  TELEPORT = "TELEPORT",
  SHOOTER = "SHOOTER",
  CHARGE_IMMUNITY = "CHARGE_IMMUNITY",
  ADDITIONAL_ATTACK = "ADDITIONAL_ATTACK",
  UNLIMITED_RETALIATIONS = "UNLIMITED_RETALIATIONS",
  NO_MELEE_PENALTY = "NO_MELEE_PENALTY",
  JOUSTING = "JOUSTING" /*for champions*/,
  HATE = "HATE" /*eg. angels hate devils, subtype - ID of hated creature, val - damage bonus percent */,
  KING1 = "KING1",
  KING2 = "KING2",
  KING3 = "KING3",
  MAGIC_RESISTANCE = "MAGIC_RESISTANCE" /*in % (value)*/,
  CHANGES_SPELL_COST_FOR_ALLY = "CHANGES_SPELL_COST_FOR_ALLY" /*in mana points (value) , eg. mage*/,
  CHANGES_SPELL_COST_FOR_ENEMY = "CHANGES_SPELL_COST_FOR_ENEMY" /*in mana points (value) , eg. pegasus */,
  SPELL_AFTER_ATTACK = "SPELL_AFTER_ATTACK" /* subtype - spell id, value - chance %, addInfo[0] - level, addInfo[1] -> [0 - all attacks, 1 - shot only, 2 - melee only] */,
  SPELL_BEFORE_ATTACK = "SPELL_BEFORE_ATTACK" /* subtype - spell id, value - chance %, addInfo[0] - level, addInfo[1] -> [0 - all attacks, 1 - shot only, 2 - melee only] */,
  SPELL_RESISTANCE_AURA = "SPELL_RESISTANCE_AURA" /*eg. unicorns, value - resistance bonus in % for adjacent creatures*/,
  LEVEL_SPELL_IMMUNITY = "LEVEL_SPELL_IMMUNITY" /*creature is immune to all spell with level below or equal to value of this bonus */,
  BLOCK_MAGIC_ABOVE = "BLOCK_MAGIC_ABOVE" /*blocks casting spells of the level > value */,
  BLOCK_ALL_MAGIC = "BLOCK_ALL_MAGIC" /*blocks casting spells*/,
  TWO_HEX_ATTACK_BREATH = "TWO_HEX_ATTACK_BREATH" /*eg. dragons*/,
  SPELL_DAMAGE_REDUCTION = "SPELL_DAMAGE_REDUCTION" /*eg. golems; value - reduction in %, subtype - spell school; -1 - all, 0 - air, 1 - fire, 2 - water, 3 - earth*/,
  NO_WALL_PENALTY = "NO_WALL_PENALTY",
  NON_LIVING = "NON_LIVING" /*eg. gargoyle*/,
  RANDOM_SPELLCASTER = "RANDOM_SPELLCASTER" /*eg. master genie, val - level*/,
  BLOCKS_RETALIATION = "BLOCKS_RETALIATION" /*eg. naga*/,
  SPELL_IMMUNITY = "SPELL_IMMUNITY" /*subid - spell id*/,
  MANA_CHANNELING = "MANA_CHANNELING" /*value in %, eg. familiar*/,
  SPELL_LIKE_ATTACK = "SPELL_LIKE_ATTACK" /*subtype - spell, value - spell level; range is taken from spell, but damage from creature; eg. magog*/,
  THREE_HEADED_ATTACK = "THREE_HEADED_ATTACK" /*eg. cerberus*/,
  DAEMON_SUMMONING = "DAEMON_SUMMONING" /*pit lord, subtype - type of creatures, val - hp per unit*/,
  FIRE_IMMUNITY = "FIRE_IMMUNITY" /*subtype 0 - all, 1 - all except positive, 2 - only damage spells*/,
  WATER_IMMUNITY = "WATER_IMMUNITY",
  EARTH_IMMUNITY = "EARTH_IMMUNITY",
  AIR_IMMUNITY = "AIR_IMMUNITY",
  MIND_IMMUNITY = "MIND_IMMUNITY",
  FIRE_SHIELD = "FIRE_SHIELD",
  UNDEAD = "UNDEAD",
  HP_REGENERATION = "HP_REGENERATION" /*creature regenerates val HP every new round*/,
  FULL_HP_REGENERATION = "FULL_HP_REGENERATION" /*first creature regenerates all HP every new round; subtype 0 - animation 4 (trolllike), 1 - animation 47 (wightlike)*/,
  MANA_DRAIN = "MANA_DRAIN" /*value - spell points per turn*/,
  LIFE_DRAIN = "LIFE_DRAIN",
  DOUBLE_DAMAGE_CHANCE = "DOUBLE_DAMAGE_CHANCE" /*value in %, eg. dread knight*/,
  RETURN_AFTER_STRIKE = "RETURN_AFTER_STRIKE",
  SELF_MORALE = "SELF_MORALE" /*eg. minotaur*/,
  SPELLCASTER = "SPELLCASTER" /*subtype - spell id, value - level of school, additional info - weighted chance. use SPECIFIC_SPELL_POWER, CREATURE_SPELL_POWER or CREATURE_ENCHANT_POWER for calculating the power*/,
  CATAPULT = "CATAPULT",
  ENEMY_DEFENCE_REDUCTION = "ENEMY_DEFENCE_REDUCTION" /*in % (value) eg. behemots*/,
  GENERAL_DAMAGE_REDUCTION = "GENERAL_DAMAGE_REDUCTION" /* shield / air shield effect */,
  GENERAL_ATTACK_REDUCTION = "GENERAL_ATTACK_REDUCTION" /*eg. while stoned or blinded - in %,// subtype not used, use ONLY_MELEE_FIGHT / DISTANCE_FIGHT*/,
  DEFENSIVE_STANCE = "DEFENSIVE_STANCE" /* val - bonus to defense while defending */,
  ATTACKS_ALL_ADJACENT = "ATTACKS_ALL_ADJACENT" /*eg. hydra*/,
  MORE_DAMAGE_FROM_SPELL = "MORE_DAMAGE_FROM_SPELL" /*value - damage increase in %, subtype - spell id*/,
  FEAR = "FEAR",
  FEARLESS = "FEARLESS",
  NO_DISTANCE_PENALTY = "NO_DISTANCE_PENALTY",
  SELF_LUCK = "SELF_LUCK" /*halfling*/,
  ENCHANTER = "ENCHANTER" /* for Enchanter spells, val - skill level, subtype - spell id, additionalInfo - cooldown */,
  HEALER = "HEALER",
  SIEGE_WEAPON = "SIEGE_WEAPON",
  HYPNOTIZED = "HYPNOTIZED",
  NO_RETALIATION = "NO_RETALIATION" /*temporary bonus for basilisk, unicorn and scorpicore paralyze*/,
  ADDITIONAL_RETALIATION = "ADDITIONAL_RETALIATION" /*value - number of additional retaliations*/,
  MAGIC_MIRROR = "MAGIC_MIRROR" /* value - chance of redirecting in %*/,
  ALWAYS_MINIMUM_DAMAGE = "ALWAYS_MINIMUM_DAMAGE" /*unit does its minimum damage from range; subtype: -1 - any attack, 0 - melee, 1 - ranged, value: additional damage penalty (it'll subtracted from dmg), additional info - multiplicative anti-bonus for dmg in % [eg 20 means that creature will inflict 80% of normal minimal dmg]*/,
  ALWAYS_MAXIMUM_DAMAGE = "ALWAYS_MAXIMUM_DAMAGE" /*eg. bless effect, subtype: -1 - any attack, 0 - melee, 1 - ranged, value: additional damage, additional info - multiplicative bonus for dmg in %*/,
  ATTACKS_NEAREST_CREATURE = "ATTACKS_NEAREST_CREATURE" /*while in berserk*/,
  IN_FRENZY = "IN_FRENZY" /*value - level*/,
  SLAYER = "SLAYER" /*value - level*/,
  FORGETFULL = "FORGETFULL" /*forgetfulness spell effect, value - level*/,
  NOT_ACTIVE = "NOT_ACTIVE" /* subtype - spell ID (paralyze, blind, stone gaze) for graphical effect*/,
  NO_LUCK = "NO_LUCK" /*eg. when fighting on cursed ground*/,
  NO_MORALE = "NO_MORALE" /*eg. when fighting on cursed ground*/,
  DARKNESS = "DARKNESS" /*val = radius */,
  SPECIAL_SECONDARY_SKILL = "SPECIAL_SECONDARY_SKILL" /*subtype = id, val = value per level in percent*/,
  SPECIAL_SPELL_LEV = "SPECIAL_SPELL_LEV" /*subtype = id, val = value per level in percent*/,
  SPELL_DAMAGE = "SPELL_DAMAGE" /*val = value*/,
  SPECIFIC_SPELL_DAMAGE = "SPECIFIC_SPELL_DAMAGE" /*subtype = id of spell, val = value*/,
  SPECIAL_BLESS_DAMAGE = "SPECIAL_BLESS_DAMAGE" /*val = spell (bless), additionalInfo = value per level in percent*/,
  MAXED_SPELL = "MAXED_SPELL" /*val = id*/,
  SPECIAL_PECULIAR_ENCHANT = "SPECIAL_PECULIAR_ENCHANT" /*blesses and curses with id = val dependent on unit's level, subtype = 0 or 1 for Coronius*/,
  SPECIAL_UPGRADE = "SPECIAL_UPGRADE" /*subtype = base, additionalInfo = target */,
  DRAGON_NATURE = "DRAGON_NATURE",
  CREATURE_DAMAGE = "CREATURE_DAMAGE" /*subtype 0 = both, 1 = min, 2 = max*/,
  EXP_MULTIPLIER = "EXP_MULTIPLIER" /* val - percent of additional exp gained by stack/commander (base value 100)*/,
  SHOTS = "SHOTS",
  DEATH_STARE = "DEATH_STARE" /*subtype 0 - gorgon, 1 - commander*/,
  POISON = "POISON" /*val - max health penalty from poison possible*/,
  BIND_EFFECT = "BIND_EFFECT" /*doesn't do anything particular, works as a marker)*/,
  ACID_BREATH = "ACID_BREATH" /*additional val damage per creature after attack, additional info - chance in percent*/,
  RECEPTIVE = "RECEPTIVE" /*accepts friendly spells even with immunity*/,
  DIRECT_DAMAGE_IMMUNITY = "DIRECT_DAMAGE_IMMUNITY" /*direct damage spells, that is*/,
  CASTS = "CASTS" /*how many times creature can cast activated spell*/,
  SPECIFIC_SPELL_POWER = "SPECIFIC_SPELL_POWER" /* value used for Thunderbolt and Resurrection cast by units, subtype - spell id */,
  CREATURE_SPELL_POWER = "CREATURE_SPELL_POWER" /* value per unit, divided by 100 (so faerie Dragons have 800)*/,
  CREATURE_ENCHANT_POWER = "CREATURE_ENCHANT_POWER" /* total duration of spells cast by creature */,
  ENCHANTED = "ENCHANTED" /* permanently enchanted with spell subID of level = val, if val > 3 then spell is mass and has level of val-3*/,
  REBIRTH = "REBIRTH" /* val - percent of life restored, subtype = 0 - regular, 1 - at least one unit (sacred Phoenix) */,
  ADDITIONAL_UNITS = "ADDITIONAL_UNITS" /*val of units with id = subtype will be added to hero's army at the beginning of battle */,
  SPOILS_OF_WAR = "SPOILS_OF_WAR" /*val * 10^-6 * gained exp resources of subtype will be given to hero after battle*/,
  BLOCK = "BLOCK",
  DISGUISED = "DISGUISED" /* subtype - spell level */,
  VISIONS = "VISIONS" /* subtype - spell level */,
  NO_TERRAIN_PENALTY = "NO_TERRAIN_PENALTY" /* subtype - terrain type */,
  SOUL_STEAL = "SOUL_STEAL" /*val - number of units gained per enemy killed, subtype = 0 - gained units survive after battle, 1 - they do not*/,
  TRANSMUTATION = "TRANSMUTATION" /*val - chance to trigger in %, subtype = 0 - resurrection based on HP, 1 - based on unit count, additional info - target creature ID (attacker default)*/,
  SUMMON_GUARDIANS = "SUMMON_GUARDIANS" /*val - amount in % of stack count, subtype = creature ID*/,
  CATAPULT_EXTRA_SHOTS = "CATAPULT_EXTRA_SHOTS" /*val - number of additional shots, requires CATAPULT bonus to work*/,
  RANGED_RETALIATION = "RANGED_RETALIATION" /*allows shooters to perform ranged retaliation*/,
  BLOCKS_RANGED_RETALIATION = "BLOCKS_RANGED_RETALIATION" /*disallows ranged retaliation for shooter unit, BLOCKS_RETALIATION bonus is for melee retaliation only*/,
  SECONDARY_SKILL_VAL2 = "SECONDARY_SKILL_VAL2" /*for secondary skills that have multiple effects, like eagle eye (max level and chance)*/,
  MANUAL_CONTROL = "MANUAL_CONTROL" /* manually control warmachine with id = subtype, chance = val */,
  WIDE_BREATH = "WIDE_BREATH" /* initial desigh: dragon breath affecting multiple nearby hexes */,
  FIRST_STRIKE = "FIRST_STRIKE" /* first counterattack, then attack if possible */,
  SYNERGY_TARGET = "SYNERGY_TARGET" /* dummy skill for alternative upgrades mod */,
  SHOOTS_ALL_ADJACENT = "SHOOTS_ALL_ADJACENT" /* H4 Cyclops-like shoot (attacks all hexes neighboring with target) without spell-like mechanics */,
  BLOCK_MAGIC_BELOW = "BLOCK_MAGIC_BELOW" /*blocks casting spells of the level < value */,
  DESTRUCTION = "DESTRUCTION" /*kills extra units after hit, subtype = 0 - kill percentage of units, 1 - kill amount, val = chance in percent to trigger, additional info - amount/percentage to kill*/
}

export enum EffectRange {
  NO_LIMIT = 0,
  ONLY_DISTANCE_FIGHT = 1,
  ONLY_MELEE_FIGHT, //used to mark bonuses for attack/defense primary skills from spells like Precision (distance only)
  ONLY_ENEMY_ARMY
}

export enum ImmunityType {
  All,
  AllExceptPositive,
  DamageOnly
}

export enum AttackType {
  All,
  ShotOnly,
  MeleeOnly
}

export type Trait =
  | {
      type: TraitType.CHARGE_IMMUNITY;
    }
  | {
      type: TraitType.ADDITIONAL_ATTACK;
      effectRange?: EffectRange;
    }
  | {
      type: TraitType.ADDITIONAL_RETALIATION;
      value: number;
    }
  | {
      type: TraitType.UNLIMITED_RETALIATIONS;
    }
  | {
      type: TraitType.HATE;
      creature: Creature;
      damageMultiplier: number;
    }
  | {
      type: TraitType.SPECIFIC_SPELL_POWER;
      spell: Spell;
      value: number;
    }
  | {
      type: TraitType.SPELLCASTER;
      spell: Spell;
      level: number;
      chance?: number;
    }
  | {
      type: TraitType.CASTS;
      amount: number;
    }
  | {
      type: TraitType.NON_LIVING;
    }
  | {
      type: TraitType.MIND_IMMUNITY;
    }
  | {
      type: TraitType.SPELL_IMMUNITY;
      spell: Spell;
    }
  | {
      type: TraitType.MORE_DAMAGE_FROM_SPELL;
      spell: Spell;
      damageMultiplier: number;
    }
  | {
      type: TraitType.FIRE_IMMUNITY | TraitType.WATER_IMMUNITY;
      immuneTo: ImmunityType;
    }
  | {
      type: TraitType.LEVEL_SPELL_IMMUNITY;
      level: number;
    }
  | {
      type: TraitType.CREATURE_ENCHANT_POWER;
      duration: number;
    }
  | {
      type: TraitType.REBIRTH;
      restoreHP: number;
    }
  | {
      type: TraitType.RETURN_AFTER_STRIKE;
    }
  | {
      type: TraitType.BLOCKS_RETALIATION;
    }
  | {
      type: TraitType.SPELL_AFTER_ATTACK;
      spell: Spell;
      chance: number;
      level?: number;
      after?: AttackType;
    }
  | {
      type: TraitType.SELF_MORALE;
    }
  | {
      type: TraitType.DRAGON_NATURE;
    }
  | {
      type: TraitType.TWO_HEX_ATTACK_BREATH;
    }
  | {
      type: TraitType.DEATH_STARE;
      chanceToKill: number;
    }
  | {
      type: TraitType.ATTACKS_ALL_ADJACENT;
    }
  | {
      type: TraitType.RANDOM_SPELLCASTER;
      level: number;
    }
  | {
      type: TraitType.CHANGES_SPELL_COST_FOR_ALLY;
      points: number;
    }
  | {
      type: TraitType.CHANGES_SPELL_COST_FOR_ENEMY;
      points: number;
    }
  | {
      type: TraitType.SPELL_DAMAGE_REDUCTION;
      school: -1;
      percent: number;
    }
  | {
      type: TraitType.ENEMY_DEFENCE_REDUCTION;
      percent: number;
    }
  | {
      type: TraitType.CATAPULT_EXTRA_SHOTS;
      amount: number;
    }
  | {
      type: TraitType.SPELL_RESISTANCE_AURA;
      percent: number;
    }
  | {
      type: TraitType.MAGIC_RESISTANCE;
      percent: number;
    }
  | {
      type: TraitType.FULL_HP_REGENERATION;
    }
  | {
      type: TraitType.NO_TERRAIN_PENALTY;
      terrain: Terrain.Sand;
    }
  | {
      type: TraitType.UNDEAD;
    }
  | {
      type: TraitType.SELF_LUCK;
    }
  | {
      type: TraitType.NO_WALL_PENALTY;
    }
  | {
      type: TraitType.NO_DISTANCE_PENALTY;
    }
  | {
      type: TraitType.ENCHANTER;
      spell: Spell;
      level: number;
      cooldown: number;
    }
  | {
      type: TraitType.ACID_BREATH;
      damage: number;
      chance: number;
    }
  | {
      type: TraitType.SPELL_LIKE_ATTACK;
      spell: Spell;
    }
  | {
      type: TraitType.MANA_CHANNELING;
      percent: number;
    }
  | {
      type: TraitType.THREE_HEADED_ATTACK;
    }
  | {
      type: TraitType.DAEMON_SUMMONING;
      creature: Creature;
      hp: number;
    }
  | {
      type: TraitType.FLYING;
    }
  | {
      type: TraitType.FIRE_SHIELD;
      value: number;
    }
  | {
      type: TraitType.LUCK;
      effectRange: EffectRange;
      value: number;
    }
  | {
      type: TraitType.MANA_DRAIN;
      points: number;
    }
  | {
      type: TraitType.LIFE_DRAIN;
      points: number;
    }
  | {
      type: TraitType.DOUBLE_DAMAGE_CHANCE;
      chance: number;
    }
  | {
      type: TraitType.FEARLESS;
    }
  | {
      type: TraitType.FEAR;
    }
  | {
      type: TraitType.GENERATE_RESOURCE;
      resource: Resource;
      amount: number;
    }
  | {
      type: TraitType.MORALE;
      value: number;
    }
  | {
      type: TraitType.TELEPORT;
    }
  | {
      type: TraitType.MAGIC_MIRROR;
      chance: number;
    }
  | {
      type: TraitType.CREATURE_SPELL_POWER;
      value: number;
    }
  | {
      type: TraitType.VISIONS;
    };
