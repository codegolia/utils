import { isObject } from './isObject';

export function isEmptyObject(value: any): value is {} {
  if (!isObject(value)) return false;

  return Object.keys(value).length === 0;
}
