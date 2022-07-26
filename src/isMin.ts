import { isNumber } from './isNumber';

export function isMin(value: number, min: number): boolean {
  if (!isNumber(value)) return false;

  return value >= min;
}
