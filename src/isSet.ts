import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isSet<T>(value: any): value is Set<T> {
  return getObjectType(value) === ObjectType.Set;
}
