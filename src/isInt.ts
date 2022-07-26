import { isNumber } from './isNumber';

export function isInt(value: any): value is number {
  if (!isNumber(value)) return false;

  return parseInt(value + '') === value;
}
