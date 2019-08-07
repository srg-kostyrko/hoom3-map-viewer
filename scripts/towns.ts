import * as townTemplates from "../src/components/town/templates";
import { TownTemplate } from "../src/contracts/town";

function extractFileList(template: TownTemplate) {
  const files = [];
  files.push(template.townBackground);
  for (const structConfig of Object.values(template.buildings)) {
    files.push(structConfig.gfx.animation.toLowerCase());
    files.push(structConfig.gfx.border.toLowerCase());
    files.push(structConfig.gfx.area.toLowerCase());
  }
  for (const structConfig of Object.values(template.upgrades)) {
    files.push(structConfig.gfx.animation.toLowerCase());
    files.push(structConfig.gfx.border.toLowerCase());
    files.push(structConfig.gfx.area.toLowerCase());
  }
  for (const animation of template.animations) {
    files.push(animation.gfx)
  }
  for (const extra of Object.values(template.extras)) {
    files.push(extra.gfx)
  }
  return files;
}

export const townFiles = [
  ...extractFileList(townTemplates.castleTemplate),
  ...extractFileList(townTemplates.confluxTemplate),
  ...extractFileList(townTemplates.dungeonTemplate),
  ...extractFileList(townTemplates.fortressTemplate),
  ...extractFileList(townTemplates.infernoTemplate),
  ...extractFileList(townTemplates.necropolisTemplate),
  ...extractFileList(townTemplates.rampartTemplate),
  ...extractFileList(townTemplates.strongholdTemplate),
  ...extractFileList(townTemplates.towerTemplate)
];

export default townFiles;
