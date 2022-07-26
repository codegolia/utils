import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isRegExp(value: any): value is RegExp {
  return getObjectType(value) === ObjectType.RegExp;
}
