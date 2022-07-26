import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isFunction(value: any): value is Function {
  return getObjectType(value) === ObjectType.Function;
}
