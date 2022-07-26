import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isWeakMap<K extends object, V>(
  value: any
): value is WeakMap<K, V> {
  return getObjectType(value) === ObjectType.WeakMap;
}
