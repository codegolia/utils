import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isInt32Array(value: any): value is Int32Array {
  return getObjectType(value) === ObjectType.Int32Array;
}
