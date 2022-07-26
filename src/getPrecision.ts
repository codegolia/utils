import { isNumber } from './isNumber';

export function getPrecision(value: any): number {
  if (!isNumber(value)) return 0;

  const string = value + '';
  const [, precision] = string.split('.');

  console.log({ precision, value });

  if (!precision) return 0;

  return precision.length;
}
