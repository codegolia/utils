import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isBoolean(value: any): value is boolean {
  return getObjectType(value) === ObjectType.Boolean;
}
