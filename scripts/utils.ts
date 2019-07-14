const replacementMap: Record<number, RGBAArray> = {
  0: [0, 0, 0, 0],
  1: [0, 0, 0, 0x40],
  4: [0, 0, 0, 0x80],
  6: [0, 0, 0, 0x80],
  7: [0, 0, 0, 0x40]
};

type RGBArray = [number, number, number];
type RGBAArray = [number, number, number, number];

export const getPixel = (palette: RGBArray[], pixel: number): RGBAArray => {
  if (pixel in replacementMap) {
    return replacementMap[pixel];
  }
  const data = palette[pixel];
  return [data[0], data[1], data[2], 0xff];
};

export const convertPixels = (pixels: number[], palette: RGBArray[]) => {
  const imageDataArray = new Uint8ClampedArray(pixels.length * 4);

  let index = 0;
  for (const pixel of pixels) {
    const [r, g, b, alpha] = getPixel(palette, pixel);
    imageDataArray[index] = r;
    imageDataArray[index + 1] = g;
    imageDataArray[index + 2] = b;
    imageDataArray[index + 3] = alpha;
    index += 4;
  }
  return imageDataArray;
};

export const convertBGGtoRGBA = (pixels: RGBArray[]) => {
  const imageDataArray = new Uint8ClampedArray(pixels.length * 4);

  let index = 0;
  for (const pixel of pixels) {
    const [b, g, r] = pixel;
    imageDataArray[index] = r;
    imageDataArray[index + 1] = g;
    imageDataArray[index + 2] = b;
    imageDataArray[index + 3] = 0xff;
    index += 4;
  }
  return imageDataArray;
};
