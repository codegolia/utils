import { isNumber } from './isNumber';

export function isPositive(value: number): boolean {
  if (!isNumber(value)) return false;

  return value >= 0;
}
