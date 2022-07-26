import { isNumber } from './isNumber';

export function isEven(value: number): boolean {
  if (!isNumber(value)) return false;

  return value % 2 === 0;
}
