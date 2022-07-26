import { isInt } from './isInt';
import { isBetween } from './isBetween';

export function isInt1(value: any): value is number {
  if (!isInt(value)) return false;

  return isBetween(value, -128, 127);
}
