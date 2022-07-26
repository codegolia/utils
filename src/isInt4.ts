import { isInt } from './isInt';
import { isBetween } from './isBetween';

export function isInt4(value: any): value is number {
  if (!isInt(value)) return false;

  return isBetween(value, -2147483648, 2147483647);
}
