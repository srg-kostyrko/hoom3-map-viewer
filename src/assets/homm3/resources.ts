import { Alignment, Creature } from "homm3-parsers";

function prepareAlignmentResource(alignment: Alignment) {
  return {
    image: require(`./towns/${alignment}.png`),
    data: require(`./towns/${alignment}.json`)
  };
}
function prepareCreatureResources(creature: Creature) {
  return {
    image: require(`./creatures/${creature}.png`),
    data: require(`./creatures/${creature}.json`)
  };
}

export const resources = {
  terrain: {
    image: require("./textures/terrain.png"),
    data: require("./textures/terrain.json")
  },
  edges: {
    image: require("./textures/edges.png"),
    data: require("./textures/edges.json")
  },
  towns: {
    image: require("./textures/towns.png"),
    data: require("./textures/towns.json")
  },
  monsters: {
    image: require("./textures/monsters.png"),
    data: require("./textures/monsters.json")
  },
  impassable_terrain: {
    image: require("./textures/impassable_terrain.png"),
    data: require("./textures/impassable_terrain.json")
  },
  passable_terrain: {
    image: require("./textures/passable_terrain.png"),
    data: require("./textures/passable_terrain.json")
  },
  visitable: {
    image: require("./textures/visitable.png"),
    data: require("./textures/visitable.json")
  },
  dwelling: {
    image: require("./textures/dwelling.png"),
    data: require("./textures/dwelling.json")
  },
  artifact: {
    image: require("./textures/artifact.png"),
    data: require("./textures/artifact.json")
  },
  hero: {
    image: require("./textures/hero.png"),
    data: require("./textures/hero.json")
  },
  resource: {
    image: require("./textures/resource.png"),
    data: require("./textures/resource.json")
  },
  [Alignment.Castle]: prepareAlignmentResource(Alignment.Castle),
  [Alignment.Conflux]: prepareAlignmentResource(Alignment.Conflux),
  [Alignment.Dungeon]: prepareAlignmentResource(Alignment.Dungeon),
  [Alignment.Fortress]: prepareAlignmentResource(Alignment.Fortress),
  [Alignment.Inferno]: prepareAlignmentResource(Alignment.Inferno),
  [Alignment.Necropolis]: prepareAlignmentResource(Alignment.Necropolis),
  [Alignment.Rampart]: prepareAlignmentResource(Alignment.Rampart),
  [Alignment.Stronghold]: prepareAlignmentResource(Alignment.Stronghold),
  [Alignment.Tower]: prepareAlignmentResource(Alignment.Tower),

  // creatures
  [Creature.Pikeman]: prepareCreatureResources(Creature.Pikeman),
  [Creature.Halberdier]: prepareCreatureResources(Creature.Halberdier),
  [Creature.Archer]: prepareCreatureResources(Creature.Archer),
  [Creature.Marksman]: prepareCreatureResources(Creature.Marksman),
  [Creature.Griffin]: prepareCreatureResources(Creature.Griffin),
  [Creature.RoyalGriffin]: prepareCreatureResources(Creature.RoyalGriffin),
  [Creature.Swordsman]: prepareCreatureResources(Creature.Swordsman),
  [Creature.Crusader]: prepareCreatureResources(Creature.Crusader),
  [Creature.Monk]: prepareCreatureResources(Creature.Monk),
  [Creature.Zealot]: prepareCreatureResources(Creature.Zealot),
  [Creature.Cavalier]: prepareCreatureResources(Creature.Cavalier),
  [Creature.Champion]: prepareCreatureResources(Creature.Champion),
  [Creature.Angel]: prepareCreatureResources(Creature.Angel),
  [Creature.Archangel]: prepareCreatureResources(Creature.Archangel),
  [Creature.Centaur]: prepareCreatureResources(Creature.Centaur),
  [Creature.CentaurCaptain]: prepareCreatureResources(Creature.CentaurCaptain),
  [Creature.Dwarf]: prepareCreatureResources(Creature.Dwarf),
  [Creature.BattleDwarf]: prepareCreatureResources(Creature.BattleDwarf),
  [Creature.WoodElf]: prepareCreatureResources(Creature.WoodElf),
  [Creature.GrandElf]: prepareCreatureResources(Creature.GrandElf),
  [Creature.Pegasus]: prepareCreatureResources(Creature.Pegasus),
  [Creature.SilverPegasus]: prepareCreatureResources(Creature.SilverPegasus),
  [Creature.DendroidGuard]: prepareCreatureResources(Creature.DendroidGuard),
  [Creature.DendroidSoldier]: prepareCreatureResources(
    Creature.DendroidSoldier
  ),
  [Creature.Unicorn]: prepareCreatureResources(Creature.Unicorn),
  [Creature.WarUnicorn]: prepareCreatureResources(Creature.WarUnicorn),
  [Creature.GreenDragon]: prepareCreatureResources(Creature.GreenDragon),
  [Creature.GoldDragon]: prepareCreatureResources(Creature.GoldDragon),
  [Creature.Gremlin]: prepareCreatureResources(Creature.Gremlin),
  [Creature.MasterGremlin]: prepareCreatureResources(Creature.MasterGremlin),
  [Creature.StoneGargoyle]: prepareCreatureResources(Creature.StoneGargoyle),
  [Creature.ObsidianGargoyle]: prepareCreatureResources(
    Creature.ObsidianGargoyle
  ),
  [Creature.StoneGolem]: prepareCreatureResources(Creature.StoneGolem),
  [Creature.IronGolem]: prepareCreatureResources(Creature.IronGolem),
  [Creature.Mage]: prepareCreatureResources(Creature.Mage),
  [Creature.ArchMage]: prepareCreatureResources(Creature.ArchMage),
  [Creature.Genie]: prepareCreatureResources(Creature.Genie),
  [Creature.MasterGenie]: prepareCreatureResources(Creature.MasterGenie),
  [Creature.Naga]: prepareCreatureResources(Creature.Naga),
  [Creature.NagaQueen]: prepareCreatureResources(Creature.NagaQueen),
  [Creature.Giant]: prepareCreatureResources(Creature.Giant),
  [Creature.Titan]: prepareCreatureResources(Creature.Titan),
  [Creature.Imp]: prepareCreatureResources(Creature.Imp),
  [Creature.Familiar]: prepareCreatureResources(Creature.Familiar),
  [Creature.Gog]: prepareCreatureResources(Creature.Gog),
  [Creature.Magog]: prepareCreatureResources(Creature.Magog),
  [Creature.HellHound]: prepareCreatureResources(Creature.HellHound),
  [Creature.Cerberus]: prepareCreatureResources(Creature.Cerberus),
  [Creature.Demon]: prepareCreatureResources(Creature.Demon),
  [Creature.HornedDemon]: prepareCreatureResources(Creature.HornedDemon),
  [Creature.PitFiend]: prepareCreatureResources(Creature.PitFiend),
  [Creature.PitLord]: prepareCreatureResources(Creature.PitLord),
  [Creature.Efreeti]: prepareCreatureResources(Creature.Efreeti),
  [Creature.EfreetSultan]: prepareCreatureResources(Creature.EfreetSultan),
  [Creature.Devil]: prepareCreatureResources(Creature.Devil),
  [Creature.ArchDevil]: prepareCreatureResources(Creature.ArchDevil),
  [Creature.Skeleton]: prepareCreatureResources(Creature.Skeleton),
  [Creature.SkeletonWarrior]: prepareCreatureResources(
    Creature.SkeletonWarrior
  ),
  [Creature.WalkingDead]: prepareCreatureResources(Creature.WalkingDead),
  [Creature.Zombie]: prepareCreatureResources(Creature.Zombie),
  [Creature.Wight]: prepareCreatureResources(Creature.Wight),
  [Creature.Wraith]: prepareCreatureResources(Creature.Wraith),
  [Creature.Vampire]: prepareCreatureResources(Creature.Vampire),
  [Creature.VampireLord]: prepareCreatureResources(Creature.VampireLord),
  [Creature.Lich]: prepareCreatureResources(Creature.Lich),
  [Creature.PowerLich]: prepareCreatureResources(Creature.PowerLich),
  [Creature.BlackKnight]: prepareCreatureResources(Creature.BlackKnight),
  [Creature.DreadKnight]: prepareCreatureResources(Creature.DreadKnight),
  [Creature.BoneDragon]: prepareCreatureResources(Creature.BoneDragon),
  [Creature.GhostDragon]: prepareCreatureResources(Creature.GhostDragon),
  [Creature.Troglodyte]: prepareCreatureResources(Creature.Troglodyte),
  [Creature.InfernalTroglodyte]: prepareCreatureResources(
    Creature.InfernalTroglodyte
  ),
  [Creature.Harpy]: prepareCreatureResources(Creature.Harpy),
  [Creature.HarpyHag]: prepareCreatureResources(Creature.HarpyHag),
  [Creature.Beholder]: prepareCreatureResources(Creature.Beholder),
  [Creature.EvilEye]: prepareCreatureResources(Creature.EvilEye),
  [Creature.Medusa]: prepareCreatureResources(Creature.Medusa),
  [Creature.MedusaQueen]: prepareCreatureResources(Creature.MedusaQueen),
  [Creature.Minotaur]: prepareCreatureResources(Creature.Minotaur),
  [Creature.MinotaurKing]: prepareCreatureResources(Creature.MinotaurKing),
  [Creature.Manticore]: prepareCreatureResources(Creature.Manticore),
  [Creature.Scorpicore]: prepareCreatureResources(Creature.Scorpicore),
  [Creature.RedDragon]: prepareCreatureResources(Creature.RedDragon),
  [Creature.BlackDragon]: prepareCreatureResources(Creature.BlackDragon),
  [Creature.Goblin]: prepareCreatureResources(Creature.Goblin),
  [Creature.Hobgoblin]: prepareCreatureResources(Creature.Hobgoblin),
  [Creature.WolfRider]: prepareCreatureResources(Creature.WolfRider),
  [Creature.WolfRaider]: prepareCreatureResources(Creature.WolfRaider),
  [Creature.Orc]: prepareCreatureResources(Creature.Orc),
  [Creature.OrcChieftain]: prepareCreatureResources(Creature.OrcChieftain),
  [Creature.Ogre]: prepareCreatureResources(Creature.Ogre),
  [Creature.OgreMage]: prepareCreatureResources(Creature.OgreMage),
  [Creature.Roc]: prepareCreatureResources(Creature.Roc),
  [Creature.Thunderbird]: prepareCreatureResources(Creature.Thunderbird),
  [Creature.Cyclop]: prepareCreatureResources(Creature.Cyclop),
  [Creature.CyclopKing]: prepareCreatureResources(Creature.CyclopKing),
  [Creature.Behemoth]: prepareCreatureResources(Creature.Behemoth),
  [Creature.AncientBehemoth]: prepareCreatureResources(
    Creature.AncientBehemoth
  ),
  [Creature.Gnoll]: prepareCreatureResources(Creature.Gnoll),
  [Creature.GnollMarauder]: prepareCreatureResources(Creature.GnollMarauder),
  [Creature.Lizardman]: prepareCreatureResources(Creature.Lizardman),
  [Creature.LizardWarrior]: prepareCreatureResources(Creature.LizardWarrior),
  [Creature.Gorgon]: prepareCreatureResources(Creature.Gorgon),
  [Creature.MightyGorgon]: prepareCreatureResources(Creature.MightyGorgon),
  [Creature.SerpentFly]: prepareCreatureResources(Creature.SerpentFly),
  [Creature.DragonFly]: prepareCreatureResources(Creature.DragonFly),
  [Creature.Basilisk]: prepareCreatureResources(Creature.Basilisk),
  [Creature.GreaterBasilisk]: prepareCreatureResources(
    Creature.GreaterBasilisk
  ),
  [Creature.Wyvern]: prepareCreatureResources(Creature.Wyvern),
  [Creature.WyvernMonarch]: prepareCreatureResources(Creature.WyvernMonarch),
  [Creature.Hydra]: prepareCreatureResources(Creature.Hydra),
  [Creature.ChaosHydra]: prepareCreatureResources(Creature.ChaosHydra),
  [Creature.AirElemental]: prepareCreatureResources(Creature.AirElemental),
  [Creature.EarthElemental]: prepareCreatureResources(Creature.EarthElemental),
  [Creature.FireElemental]: prepareCreatureResources(Creature.FireElemental),
  [Creature.WaterElemental]: prepareCreatureResources(Creature.WaterElemental),
  [Creature.GoldGolem]: prepareCreatureResources(Creature.GoldGolem),
  [Creature.DiamondGolem]: prepareCreatureResources(Creature.DiamondGolem),
  [Creature.Pixie]: prepareCreatureResources(Creature.Pixie),
  [Creature.Sprite]: prepareCreatureResources(Creature.Sprite),
  [Creature.PsychicElemental]: prepareCreatureResources(
    Creature.PsychicElemental
  ),
  [Creature.MagicElemental]: prepareCreatureResources(Creature.MagicElemental),
  [Creature.IceElemental]: prepareCreatureResources(Creature.IceElemental),
  [Creature.MagmaElemental]: prepareCreatureResources(Creature.MagmaElemental),
  [Creature.StormElemental]: prepareCreatureResources(Creature.StormElemental),
  [Creature.EnergyElemental]: prepareCreatureResources(
    Creature.EnergyElemental
  ),
  [Creature.Firebird]: prepareCreatureResources(Creature.Firebird),
  [Creature.Phoenix]: prepareCreatureResources(Creature.Phoenix),
  [Creature.AzureDragon]: prepareCreatureResources(Creature.AzureDragon),
  [Creature.CrystalDragon]: prepareCreatureResources(Creature.CrystalDragon),
  [Creature.FaerieDragon]: prepareCreatureResources(Creature.FaerieDragon),
  [Creature.RustDragon]: prepareCreatureResources(Creature.RustDragon),
  [Creature.Enchanter]: prepareCreatureResources(Creature.Enchanter),
  [Creature.Sharpshooter]: prepareCreatureResources(Creature.Sharpshooter),
  [Creature.Halfling]: prepareCreatureResources(Creature.Halfling),
  [Creature.Peasant]: prepareCreatureResources(Creature.Peasant),
  [Creature.Boar]: prepareCreatureResources(Creature.Boar),
  [Creature.Mummy]: prepareCreatureResources(Creature.Mummy),
  [Creature.Nomad]: prepareCreatureResources(Creature.Nomad),
  [Creature.Rogue]: prepareCreatureResources(Creature.Rogue),
  [Creature.Troll]: prepareCreatureResources(Creature.Troll)
};
