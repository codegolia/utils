import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isUint32Array(value: any): value is Uint32Array {
  return getObjectType(value) === ObjectType.Uint32Array;
}
