import { getKey } from './getKey';
import { AnyObject } from './types';

export function isKeyExist(object: AnyObject, path: string): boolean {
  return getKey(object, path) !== undefined;
}
