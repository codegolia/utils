import { isArray } from './isArray';

export function isEmptyArray(value: any): value is [] {
  if (!isArray(value)) return false;

  return value.length === 0;
}
