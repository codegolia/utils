import { isUint } from './isUint';
import { isBetween } from './isBetween';

export function isUint2(value: any): value is number {
  if (!isUint(value)) return false;

  return isBetween(value, 0, 65535);
}
