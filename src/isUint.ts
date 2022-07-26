import { isNumber } from './isNumber';

export function isUint(value: any): value is number {
  if (!isNumber(value)) return false;

  return value >= 0;
}
