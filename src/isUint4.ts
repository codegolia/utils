import { isUint } from './isUint';
import { isBetween } from './isBetween';

export function isUint4(value: any): value is number {
  if (!isUint(value)) return false;

  return isBetween(value, 0, 4294967295);
}
