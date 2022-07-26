import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isInt16Array(value: any): value is Int16Array {
  return getObjectType(value) === ObjectType.Int16Array;
}
