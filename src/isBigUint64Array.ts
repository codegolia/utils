import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isBigUint64Array(value: any): value is BigUint64Array {
  return getObjectType(value) === ObjectType.BigUint64Array;
}
