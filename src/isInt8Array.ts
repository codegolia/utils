import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isInt8Array(value: any): value is Int8Array {
  return getObjectType(value) === ObjectType.Int8Array;
}
