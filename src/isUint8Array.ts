import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isUint8Array(value: any): value is Uint8Array {
  return getObjectType(value) === ObjectType.Uint8Array;
}
