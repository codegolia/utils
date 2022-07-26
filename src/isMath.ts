import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isMath(value: any): value is Math {
  return getObjectType(value) === ObjectType.Math;
}
