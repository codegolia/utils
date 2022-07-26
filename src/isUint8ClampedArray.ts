import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isUint8ClampedArray(value: any): value is Uint8ClampedArray {
  return getObjectType(value) === ObjectType.Uint8ClampedArray;
}
