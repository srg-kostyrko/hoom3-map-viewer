import castleConfig from "./towns/castle";
import confluxConfig from "./towns/conflux";
import dungeonConfig from "./towns/dungeon";
import fortressConfig from "./towns/fortress";
import infernoConfig from "./towns/inferno";
import necropolisConfig from "./towns/necropolis";
import rampartConfig from "./towns/rampart";
import strongholdConfig from "./towns/stronghold";
import towerConfig from "./towns/tower";

export interface TownConfig {
  town: {
    townBackground: string;
    structures: {
      [key: string]: {
        animation: string;
      };
    };
  };
}

function extractFileList(config: TownConfig) {
  const files = [];
  files.push(config.town.townBackground);
  for (const structConfig of Object.values(config.town.structures)) {
    if (structConfig && structConfig.animation) {
      files.push(structConfig.animation.toLowerCase());
    }
  }
  return files;
}

export const townFiles = [
  ...extractFileList(castleConfig),
  ...extractFileList(confluxConfig),
  ...extractFileList(dungeonConfig),
  ...extractFileList(fortressConfig),
  ...extractFileList(infernoConfig),
  ...extractFileList(necropolisConfig),
  ...extractFileList(rampartConfig),
  ...extractFileList(strongholdConfig),
  ...extractFileList(towerConfig)
];

export default townFiles;
