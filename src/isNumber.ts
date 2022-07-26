import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isNumber(value: any): value is number {
  return getObjectType(value) === ObjectType.Number;
}
