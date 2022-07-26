import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isArrayBuffer(value: any): value is ArrayBuffer {
  return getObjectType(value) === ObjectType.ArrayBuffer;
}
