import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isIntl(value: any): boolean {
  return getObjectType(value) === ObjectType.Intl;
}
