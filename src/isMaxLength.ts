import { isArray } from './isArray';
import { isString } from './isString';

export function isMaxLength(value: string | any[], max: number): boolean {
  if (!isString(value) && !isArray(value)) return false;

  return value.length <= max;
}
