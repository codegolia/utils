import { isUint } from './isUint';
import { isBetween } from './isBetween';

export function isUint8(value: any): value is number {
  if (!isUint(value)) return false;

  return isBetween(value, 0, 2 ** 64 - 1);
}
