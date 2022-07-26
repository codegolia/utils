import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isDate(value: any): value is Date {
  return getObjectType(value) === ObjectType.Date;
}
