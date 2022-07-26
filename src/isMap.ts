import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isMap<K, V>(value: any): value is Map<K, V> {
  return getObjectType(value) === ObjectType.Map;
}
