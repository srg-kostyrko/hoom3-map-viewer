export interface Frame {
  frame: { x: number; y: number; w: number; h: number };
  rotated: boolean;
  trimmed: boolean;
  spriteSourceSize: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  sourceSize: { w: number; h: number };
}

export interface FileData {
  key: string;
  left: number;
  top: number;
  fullWidth: number;
  fullHeight: number;
  width: number;
  height: number;
  imageData: ImageData;
}
