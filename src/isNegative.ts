import { isNumber } from './isNumber';

export function isNegative(value: number): boolean {
  if (!isNumber(value)) return false;

  return value < 0;
}
