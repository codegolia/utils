import { isInt } from './isInt';
import { isBetween } from './isBetween';

export function isInt8(value: any): value is number {
  if (!isInt(value)) return false;

  return isBetween(value, -(2 ** 63), 2 ** 63 - 1);
}
