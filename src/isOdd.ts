import { isNumber } from './isNumber';

export function isOdd(value: number): boolean {
  if (!isNumber(value)) return false;

  return value % 2 !== 0;
}
