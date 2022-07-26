import { isString } from './isString';
import { isArray } from './isArray';
import { isNumber } from './isNumber';

export function isEqualLength(value: string | any[], length: number): boolean {
  if (!isNumber(length)) return false;
  if (!isString(value) && !isArray(value)) return false;

  return value.length === length;
}
