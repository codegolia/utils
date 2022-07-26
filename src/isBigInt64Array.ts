import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isBigInt64Array(value: any): value is BigInt64Array {
  return getObjectType(value) === ObjectType.BigInt64Array;
}
