import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isReflect(value: any): boolean {
  return getObjectType(value) === ObjectType.Reflect;
}
