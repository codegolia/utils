import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isString(value: any): value is string {
  return getObjectType(value) === ObjectType.String;
}
