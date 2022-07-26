import { isObject } from './isObject';
import { isString } from './isString';
import { indexToProperty } from './indexToProperty';
import { isUndefined } from './isUndefined';
import { AnyObject } from './types';

export function getKey(object: AnyObject, path: string, value?: any): any {
  if (!isObject(object) && !isString(path)) return false;

  const property = indexToProperty(path);
  const keys = property.split('.');

  for (var i = 0; i < keys.length; i++) {
    if (isUndefined(object)) return undefined;

    object = object[keys[i]];
  }

  if (value) object[keys[i]] = value;

  return object;
}
