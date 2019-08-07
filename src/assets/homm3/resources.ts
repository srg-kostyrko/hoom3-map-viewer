import { Alignment } from "homm3-parsers";

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
  [Alignment.Castle]: {
    image: require("./towns/Castle.png"),
    data: require("./towns/Castle.json")
  },
  [Alignment.Conflux]: {
    image: require("./towns/Conflux.png"),
    data: require("./towns/Conflux.json")
  },
  [Alignment.Dungeon]: {
    image: require("./towns/Dungeon.png"),
    data: require("./towns/Dungeon.json")
  },
  [Alignment.Fortress]: {
    image: require("./towns/Fortress.png"),
    data: require("./towns/Fortress.json")
  },
  [Alignment.Inferno]: {
    image: require("./towns/Inferno.png"),
    data: require("./towns/Inferno.json")
  },
  [Alignment.Necropolis]: {
    image: require("./towns/Necropolis.png"),
    data: require("./towns/Necropolis.json")
  },
  [Alignment.Rampart]: {
    image: require("./towns/Rampart.png"),
    data: require("./towns/Rampart.json")
  },
  [Alignment.Stronghold]: {
    image: require("./towns/Stronghold.png"),
    data: require("./towns/Stronghold.json")
  },
  [Alignment.Tower]: {
    image: require("./towns/Tower.png"),
    data: require("./towns/Tower.json")
  }
};
