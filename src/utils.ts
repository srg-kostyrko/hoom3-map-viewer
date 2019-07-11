export function range(size: number): number[] {
  return Array.from({ length: size }, (_, i) => i);
}

export function indexToXYIndex(
  index: number,
  size: number
): { xIndex: number; yIndex: number } {
  const xIndex = index % size;
  const yIndex = Math.floor(index / size);
  return { xIndex, yIndex };
}
