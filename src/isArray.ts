import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isArray<T>(value: any): value is Array<T> {
  return getObjectType(value) === ObjectType.Array;
}
