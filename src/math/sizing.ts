export type Size = { height: number; width: number };
export type ParseSizeFn = (rawSize?: string) => Size;
export type ParseSizeFactory = (
  minSize: number,
  maxSize: number
) => ParseSizeFn;

export const parseSizeFactory: ParseSizeFactory = (min, max) => {
  const clamp = (num: number): number => {
    return Math.min(Math.max(num, min), max);
  };

  const parseSize: ParseSizeFn = (rawSize = '') => {
    const [rawWidth, rawHeight] = rawSize.toLowerCase().split('x');
    const width = clamp(Number(rawWidth) || max);
    const height = Number(rawHeight) ? clamp(Number(rawHeight) || max) : width;

    return { width, height };
  };

  return parseSize;
};
