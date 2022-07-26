import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isWeakSet<T extends object>(value: any): value is WeakSet<T> {
  return getObjectType(value) === ObjectType.WeakSet;
}
