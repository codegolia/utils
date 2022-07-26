import { isInt } from './isInt';
import { isBetween } from './isBetween';

export function isInt2(value: any): value is number {
  if (!isInt(value)) return false;

  return isBetween(value, -32768, 32767);
}
