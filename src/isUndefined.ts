import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isUndefined(value: any): value is undefined {
  return getObjectType(value) === ObjectType.Undefined;
}
