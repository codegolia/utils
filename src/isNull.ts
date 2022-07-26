import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isNull(value: any): value is null {
  return getObjectType(value) === ObjectType.Null;
}
