import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isUint16Array(value: any): value is Uint16Array {
  return getObjectType(value) === ObjectType.Uint16Array;
}
