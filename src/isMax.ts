import { isNumber } from './isNumber';

export function isMax(value: number, max: number): boolean {
  if (!isNumber(value)) return false;

  return value <= max;
}
