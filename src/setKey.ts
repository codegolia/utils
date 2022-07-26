import { indexToProperty } from './indexToProperty';
import { isObject } from './isObject';
import { isString } from './isString';
import { AnyObject } from './types';

export function setKey(object: AnyObject, path: string, value: any): boolean {
  if (!isObject(object) && !isString(path)) return false;

  const property = indexToProperty(path);
  const keys = property.split('.');

  for (var i = 0; i < keys.length - 1; i++) {
    if (i === keys.length - 1) {
      object[keys[i]] = value;
    } else {
      object[keys[i]] = keys[i + 1];
    }
  }

  // object[keys[i]] = value;

  console.log({ object });

  return true;
}
