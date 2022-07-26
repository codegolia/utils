import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isFloat32Array(value: any): value is Float32Array {
  return getObjectType(value) === ObjectType.Float32Array;
}
