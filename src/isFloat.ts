import { isNumber } from './isNumber';

export function isFloat(value: any): value is number {
  if (!isNumber(value)) return false;

  return value % 1 !== 0;
}
