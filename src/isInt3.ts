import { isInt } from './isInt';
import { isBetween } from './isBetween';

export function isInt3(value: any): value is number {
  if (!isInt(value)) return false;

  return isBetween(value, -8388608, 8388607);
}
