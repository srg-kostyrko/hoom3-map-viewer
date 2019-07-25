import { convertPixels, convertBGGtoRGBA } from "./utils";
import { DefFile, PcxFile, creatureEnum } from "homm3-parsers";

type Part = {
  x: number;
  y: number;
  width: number;
  height: number;
  imageData: Uint8ClampedArray;
};

export type UiPreparedData = {
  parts: Part[];
  width: number;
  height: number;
  css?: string[];
};

const createCssSprite = (
  indexConvert: (index: number) => string = index => `index-${index}`
) => (input: DefFile, name: string): UiPreparedData => {
  const key = name.replace(".png", "");
  const css = [
    `.${key} {
  background-image: url(./${name});
}`
  ];
  const { palette } = input;
  const parts = [];
  let width = 0;
  let height = 0;
  let index = 0;

  for (const block of input.blocks) {
    for (const fileData of block.files) {
      const { width: w, height: h } = fileData;
      parts.push({
        x: 0,
        y: height,
        width: w,
        height: h,
        imageData: convertPixels(fileData.pixels, palette)
      });
      css.push(`.${key}.${indexConvert(index)} {
  background-position: 0px -${height}px;
}`);
      height += fileData.height;
      width = Math.max(width, fileData.width);
      index += 1;
    }
  }
  return { parts, width, height, css };
};

const extractFirstImage = (input: DefFile): UiPreparedData => {
  const { palette } = input;
  const parts = [];

  const [block] = input.blocks;
  const [fileData] = [...block.files];
  const { width, height } = fileData;
  parts.push({
    x: 0,
    y: 0,
    width,
    height,
    imageData: convertPixels(fileData.pixels, palette)
  });

  return { parts, width, height };
};

const createDialogBoxBorderImage = (input: DefFile): UiPreparedData => {
  const { palette } = input;
  const parts = [];
  const width = 192;
  const height = 192;

  const settings = [
    [0, 0],
    [128, 0],
    [0, 128],
    [128, 128],
    [0, 64],
    [128, 64],
    [64, 0],
    [64, 128]
  ];
  let index = 0;

  for (const block of input.blocks) {
    for (const fileData of block.files) {
      if (settings[index]) {
        const [x, y] = settings[index];
        const { top, left, width: w, height: h } = fileData;
        parts.push({
          x: x + left,
          y: y + top,
          width: w,
          height: h,
          imageData: convertPixels(fileData.pixels, palette)
        });
      }
      index += 1;
    }
  }

  return { parts, width, height };
};

const createPcxImage = (input: PcxFile): UiPreparedData => {
  const { width, height } = input;
  const parts = [];
  if (input.hasPalette) {
    const { pixels, palette } = input.paletteData;
    parts.push({
      x: 0,
      y: 0,
      width,
      height,
      imageData: convertPixels(pixels, palette)
    });
  } else if (input.hasBgr) {
    parts.push({
      x: 0,
      y: 0,
      width,
      height,
      imageData: convertBGGtoRGBA(input.bgr)
    });
  }

  return { parts, width, height };
};

const mergePcxToSprite = (inputs: PcxFile[]) => {
  const parts = [];
  let width = 0;
  let height = 0;

  for (const input of inputs) {
    const { parts: p, width: w, height: h } = createPcxImage(input);
    parts.push({
      x: 0,
      y: height,
      width: w,
      height: h,
      imageData: p[0].imageData
    });
    height += h;
    width = Math.max(width, w);
  }

  return { parts, width, height };
};

export const uiNameMap: { [key: string]: string } = {
  "twcrport.def": "army_icons.png",
  "cprsmall.def": "army_icons_small.png",
  "artifact.def": "artifact_icons.png",
  "crest58.def": "flags.png",
  "hallcstl.def": "hall_castle_buildings.png",
  "halldung.def": "hall_dungeon_buildings.png",
  "hallelem.def": "hall_conflux_buildings.png",
  "hallfort.def": "hall_fortress_buildings.png",
  "hallinfr.def": "hall_inferno_buildings.png",
  "hallnecr.def": "hall_necropolis_buildings.png",
  "hallramp.def": "hall_rampart_buildings.png",
  "hallstrn.def": "hall_stronghold_buildings.png",
  "halltowr.def": "hall_tower_buildings.png",
  "pskill.def": "skill_icons.png",
  "secskill.def": "secondary_skill_icons.png",
  "spells.def": "spells.png",
  "spellscr.def": "spell_scrolls.png",
  "speltab.def": "spell_tabs.png",
  "schools.def": "scools.png",
  "resource.def": "resource_icons.png",
  "dialgbox.def": "dialog_border_image.png",

  "tpcascas.pcx": "castle_army_bg.png",
  "tpcasdun.pcx": "dungeon_army_bg.png",
  "tpcasele.pcx": "conflux_army_bg.png",
  "tpcasfor.pcx": "fortress_army_bg.png",
  "tpcasinf.pcx": "inferno_army_bg.png",
  "tpcasnec.pcx": "necropolis_army_bg.png",
  "tpcasram.pcx": "rampart_army_bg.png",
  "tpcasstr.pcx": "stronghold_army_bg.png",
  "tpcastow.pcx": "tower_army_bg.png",
  "tpcasneu.pcx": "neutral_army_bg.png",

  "tpmage.pcx": "mage_tower.png",
  "spelback.pcx": "spellbook.png",
  "speltrnr.pcx": "spellbook_corner_right.png",
  "speltrnl.pcx": "spellbook_corner_left.png",
  "heroqvbk.pcx": "hero_quick_bg.png",
  "dibox128.pcx": "bg_s.png",
  "diboxbck.pcx": "bg.png",
  "crstkpu.pcx": "creature_quick_bg.png",
  "puzzlogo.pcx": "logo.png",

  "cssarm.def": "format_ab.png",
  "cssroe.def": "format_roe.png",
  "csssod.def": "format_sod.png",
  "iam000.def": "hero_button.png",
  "ranundr.def": "underground.png",
  "icancel.def": "cancel_button.png",
  "iokay.def": "ok_button.png",
  "mmenulg.def": "load_game_button.png",
  "ransizl.def": "size_l.png",
  "ransizm.def": "size_m.png",
  "ransizs.def": "size_s.png",
  "ransizx.def": "size_xl.png"
};

const findNameByIndex = (hash: Record<string, number>, offset: number = 0) => (
  index: number
) => {
  const entry = Object.entries(hash).find(
    ([, value]) => value === index + offset
  );
  if (entry) return entry[0];
  return `index-${index}`;
};

export const uiProcessing: {
  [key: string]: (input: DefFile, name: string) => UiPreparedData;
} = {
  "twcrport.def": createCssSprite(findNameByIndex(creatureEnum, -2)),
  "artifact.def": createCssSprite(),
  "cprsmall.def": createCssSprite(),
  "crest58.def": createCssSprite(),
  "hallcstl.def": createCssSprite(),
  "halldung.def": createCssSprite(),
  "hallelem.def": createCssSprite(),
  "hallfort.def": createCssSprite(),
  "hallinfr.def": createCssSprite(),
  "hallnecr.def": createCssSprite(),
  "hallramp.def": createCssSprite(),
  "hallstrn.def": createCssSprite(),
  "halltowr.def": createCssSprite(),
  "pskill.def": createCssSprite(),
  "secskill.def": createCssSprite(),
  "spells.def": createCssSprite(),
  "spellscr.def": createCssSprite(),
  "speltab.def": createCssSprite(),
  "schools.def": createCssSprite(),
  "resource.def": createCssSprite(),
  "dialgbox.def": createDialogBoxBorderImage,

  "cssarm.def": extractFirstImage,
  "cssroe.def": extractFirstImage,
  "csssod.def": extractFirstImage,
  "iam000.def": extractFirstImage,
  "ranundr.def": extractFirstImage,
  "icancel.def": extractFirstImage,
  "iokay.def": extractFirstImage,
  "mmenulg.def": extractFirstImage,
  "ransizl.def": extractFirstImage,
  "ransizm.def": extractFirstImage,
  "ransizs.def": extractFirstImage,
  "ransizx.def": extractFirstImage
};

export const uiProcessingPcx: {
  [key: string]: (input: PcxFile, name: string) => UiPreparedData;
} = {
  "tpcascas.pcx": createPcxImage,
  "tpcasdun.pcx": createPcxImage,
  "tpcasele.pcx": createPcxImage,
  "tpcasfor.pcx": createPcxImage,
  "tpcasinf.pcx": createPcxImage,
  "tpcasnec.pcx": createPcxImage,
  "tpcasram.pcx": createPcxImage,
  "tpcasstr.pcx": createPcxImage,
  "tpcastow.pcx": createPcxImage,
  "tpcasneu.pcx": createPcxImage,

  "tpmage.pcx": createPcxImage,
  "spelback.pcx": createPcxImage,
  "speltrnr.pcx": createPcxImage,
  "speltrnl.pcx": createPcxImage,
  "heroqvbk.pcx": createPcxImage,
  "dibox128.pcx": createPcxImage,
  "diboxbck.pcx": createPcxImage,
  "crstkpu.pcx": createPcxImage,
  "puzzlogo.pcx": createPcxImage
};

export const uiGroups: {
  files: string[];
  processingFn: (input: PcxFile[]) => UiPreparedData;
  name: string;
}[] = [
  {
    files: [
      "hpl000el.pcx",
      "hpl000kn.pcx",
      "hpl000pl.pcx",
      "hpl000sh.pcx",
      "hpl001el.pcx",
      "hpl001kn.pcx",
      "hpl001pl.pcx",
      "hpl001sh.pcx",
      "hpl002el.pcx",
      "hpl002kn.pcx",
      "hpl002pl.pcx",
      "hpl002sh.pcx",
      "hpl003el.pcx",
      "hpl003kn.pcx",
      "hpl003pl.pcx",
      "hpl003sh.pcx",
      "hpl004el.pcx",
      "hpl004kn.pcx",
      "hpl004pl.pcx",
      "hpl004sh.pcx",
      "hpl005el.pcx",
      "hpl005kn.pcx",
      "hpl005pl.pcx",
      "hpl005sh.pcx",
      "hpl006el.pcx",
      "hpl006kn.pcx",
      "hpl006pl.pcx",
      "hpl006sh.pcx",
      "hpl007el.pcx",
      "hpl007kn.pcx",
      "hpl007pl.pcx",
      "hpl007sh.pcx",
      "hpl008cl.pcx",
      "hpl008sh.pcx",
      "hpl009cl.pcx",
      "hpl009sh.pcx",
      "hpl010cl.pcx",
      "hpl011cl.pcx",
      "hpl012cl.pcx",
      "hpl013cl.pcx",
      "hpl014cl.pcx",
      "hpl015cl.pcx",
      "hpl016rn.pcx",
      "hpl017rn.pcx",
      "hpl018rn.pcx",
      "hpl019rn.pcx",
      "hpl020rn.pcx",
      "hpl021rn.pcx",
      "hpl022rn.pcx",
      "hpl023rn.pcx",
      "hpl024dr.pcx",
      "hpl025dr.pcx",
      "hpl026dr.pcx",
      "hpl027dr.pcx",
      "hpl028dr.pcx",
      "hpl029dr.pcx",
      "hpl030dr.pcx",
      "hpl031dr.pcx",
      "hpl032al.pcx",
      "hpl033al.pcx",
      "hpl034al.pcx",
      "hpl035al.pcx",
      "hpl036al.pcx",
      "hpl037al.pcx",
      "hpl038al.pcx",
      "hpl039al.pcx",
      "hpl040wz.pcx",
      "hpl041wz.pcx",
      "hpl042wz.pcx",
      "hpl043wz.pcx",
      "hpl044wz.pcx",
      "hpl045wz.pcx",
      "hpl046wz.pcx",
      "hpl047wz.pcx",
      "hpl048hr.pcx",
      "hpl049hr.pcx",
      "hpl050hr.pcx",
      "hpl051hr.pcx",
      "hpl052hr.pcx",
      "hpl053hr.pcx",
      "hpl054hr.pcx",
      "hpl055hr.pcx",
      "hpl056dm.pcx",
      "hpl057dm.pcx",
      "hpl058dm.pcx",
      "hpl059dm.pcx",
      "hpl060dm.pcx",
      "hpl061dm.pcx",
      "hpl062dm.pcx",
      "hpl063dm.pcx",
      "hpl064dk.pcx",
      "hpl065dk.pcx",
      "hpl066dk.pcx",
      "hpl067dk.pcx",
      "hpl068dk.pcx",
      "hpl069dk.pcx",
      "hpl070dk.pcx",
      "hpl071dk.pcx",
      "hpl072nc.pcx",
      "hpl073nc.pcx",
      "hpl074nc.pcx",
      "hpl075nc.pcx",
      "hpl076nc.pcx",
      "hpl077nc.pcx",
      "hpl078nc.pcx",
      "hpl079nc.pcx",
      "hpl080ov.pcx",
      "hpl081ov.pcx",
      "hpl082ov.pcx",
      "hpl083ov.pcx",
      "hpl084ov.pcx",
      "hpl085ov.pcx",
      "hpl086ov.pcx",
      "hpl087ov.pcx",
      "hpl088wl.pcx",
      "hpl089wl.pcx",
      "hpl090wl.pcx",
      "hpl091wl.pcx",
      "hpl092wl.pcx",
      "hpl093wl.pcx",
      "hpl094wl.pcx",
      "hpl095wl.pcx",
      "hpl096br.pcx",
      "hpl097br.pcx",
      "hpl098br.pcx",
      "hpl099br.pcx",
      "hpl100br.pcx",
      "hpl101br.pcx",
      "hpl102br.pcx",
      "hpl103br.pcx",
      "hpl104bm.pcx",
      "hpl105bm.pcx",
      "hpl106bm.pcx",
      "hpl107bm.pcx",
      "hpl108bm.pcx",
      "hpl109bm.pcx",
      "hpl110bm.pcx",
      "hpl111bm.pcx",
      "hpl112bs.pcx",
      "hpl113bs.pcx",
      "hpl114bs.pcx",
      "hpl115bs.pcx",
      "hpl116bs.pcx",
      "hpl117bs.pcx",
      "hpl118bs.pcx",
      "hpl119bs.pcx",
      "hpl120wh.pcx",
      "hpl121wh.pcx",
      "hpl122wh.pcx",
      "hpl123wh.pcx",
      "hpl124wh.pcx",
      "hpl125wh.pcx",
      "hpl126wh.pcx",
      "hpl127wh.pcx",
      "hpl128qc.pcx",
      "hpl129mk.pcx",
      "hpl130kn.pcx",
      "hpl131dm.pcx",
      "hpl132wl.pcx",
      "hpl133nc.pcx",
      "hpl134nc.pcx",
      "hpl135wi.pcx",
      "hpl136wi.pcx"
    ],
    processingFn: mergePcxToSprite,
    name: "hero_icons.png"
  },
  {
    files: [
      "hps000el.pcx",
      "hps000kn.pcx",
      "hps000pl.pcx",
      "hps000sh.pcx",
      "hps001el.pcx",
      "hps001kn.pcx",
      "hps001pl.pcx",
      "hps001sh.pcx",
      "hps002el.pcx",
      "hps002kn.pcx",
      "hps002pl.pcx",
      "hps002sh.pcx",
      "hps003el.pcx",
      "hps003kn.pcx",
      "hps003pl.pcx",
      "hps003sh.pcx",
      "hps004el.pcx",
      "hps004kn.pcx",
      "hps004pl.pcx",
      "hps004sh.pcx",
      "hps005el.pcx",
      "hps005kn.pcx",
      "hps005pl.pcx",
      "hps005sh.pcx",
      "hps006el.pcx",
      "hps006kn.pcx",
      "hps006pl.pcx",
      "hps006sh.pcx",
      "hps007el.pcx",
      "hps007kn.pcx",
      "hps007pl.pcx",
      "hps007sh.pcx",
      "hps008cl.pcx",
      "hps008sh.pcx",
      "hps009cl.pcx",
      "hps009sh.pcx",
      "hps010cl.pcx",
      "hps011cl.pcx",
      "hps012cl.pcx",
      "hps013cl.pcx",
      "hps014cl.pcx",
      "hps015cl.pcx",
      "hps016rn.pcx",
      "hps017rn.pcx",
      "hps018rn.pcx",
      "hps019rn.pcx",
      "hps020rn.pcx",
      "hps021rn.pcx",
      "hps022rn.pcx",
      "hps023rn.pcx",
      "hps024dr.pcx",
      "hps025dr.pcx",
      "hps026dr.pcx",
      "hps027dr.pcx",
      "hps028dr.pcx",
      "hps029dr.pcx",
      "hps030dr.pcx",
      "hps031dr.pcx",
      "hps032al.pcx",
      "hps033al.pcx",
      "hps034al.pcx",
      "hps035al.pcx",
      "hps036al.pcx",
      "hps037al.pcx",
      "hps038al.pcx",
      "hps039al.pcx",
      "hps040wz.pcx",
      "hps041wz.pcx",
      "hps042wz.pcx",
      "hps043wz.pcx",
      "hps044wz.pcx",
      "hps045wz.pcx",
      "hps046wz.pcx",
      "hps047wz.pcx",
      "hps048hr.pcx",
      "hps049hr.pcx",
      "hps050hr.pcx",
      "hps051hr.pcx",
      "hps052hr.pcx",
      "hps053hr.pcx",
      "hps054hr.pcx",
      "hps055hr.pcx",
      "hps056dm.pcx",
      "hps057dm.pcx",
      "hps058dm.pcx",
      "hps059dm.pcx",
      "hps060dm.pcx",
      "hps061dm.pcx",
      "hps062dm.pcx",
      "hps063dm.pcx",
      "hps064dk.pcx",
      "hps065dk.pcx",
      "hps066dk.pcx",
      "hps067dk.pcx",
      "hps068dk.pcx",
      "hps069dk.pcx",
      "hps070dk.pcx",
      "hps071dk.pcx",
      "hps072nc.pcx",
      "hps073nc.pcx",
      "hps074nc.pcx",
      "hps075nc.pcx",
      "hps076nc.pcx",
      "hps077nc.pcx",
      "hps078nc.pcx",
      "hps079nc.pcx",
      "hps080ov.pcx",
      "hps081ov.pcx",
      "hps082ov.pcx",
      "hps083ov.pcx",
      "hps084ov.pcx",
      "hps085ov.pcx",
      "hps086ov.pcx",
      "hps087ov.pcx",
      "hps088wl.pcx",
      "hps089wl.pcx",
      "hps090wl.pcx",
      "hps091wl.pcx",
      "hps092wl.pcx",
      "hps093wl.pcx",
      "hps094wl.pcx",
      "hps095wl.pcx",
      "hps096br.pcx",
      "hps097br.pcx",
      "hps098br.pcx",
      "hps099br.pcx",
      "hps100br.pcx",
      "hps101br.pcx",
      "hps102br.pcx",
      "hps103br.pcx",
      "hps104bm.pcx",
      "hps105bm.pcx",
      "hps106bm.pcx",
      "hps107bm.pcx",
      "hps108bm.pcx",
      "hps109bm.pcx",
      "hps110bm.pcx",
      "hps111bm.pcx",
      "hps112bs.pcx",
      "hps113bs.pcx",
      "hps114bs.pcx",
      "hps115bs.pcx",
      "hps116bs.pcx",
      "hps117bs.pcx",
      "hps118bs.pcx",
      "hps119bs.pcx",
      "hps120wh.pcx",
      "hps121wh.pcx",
      "hps122wh.pcx",
      "hps123wh.pcx",
      "hps124wh.pcx",
      "hps125wh.pcx",
      "hps126wh.pcx",
      "hps127wh.pcx",
      "hps128qc.pcx",
      "hps129mk.pcx",
      "hps130kn.pcx",
      "hps131dm.pcx",
      "hps132wl.pcx",
      "hps133nc.pcx",
      "hps134nc.pcx",
      "hps135wi.pcx",
      "hps136wi.pcx"
    ],
    processingFn: mergePcxToSprite,
    name: "hero_icons_small.png"
  }
];

export const uiFiles = [
  ...Object.keys(uiProcessing),
  ...Object.keys(uiProcessingPcx),
  ...uiGroups.reduce<string[]>((acc, group) => acc.concat(group.files), [])
];
