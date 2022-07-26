import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isBigInt(value: any): value is BigInt {
  return getObjectType(value) === ObjectType.BigInt;
}
