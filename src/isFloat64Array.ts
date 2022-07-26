import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isFloat64Array(value: any): value is Float64Array {
  return getObjectType(value) === ObjectType.Float64Array;
}
