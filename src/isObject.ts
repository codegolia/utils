import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isObject(value: any): value is { [k: string]: any } {
  return getObjectType(value) === ObjectType.Object;
}
