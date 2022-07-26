import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isSharedArrayBuffer(value: any): value is SharedArrayBuffer {
  return getObjectType(value) === ObjectType.SharedArrayBuffer;
}
