import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isAsyncFunction(value: any): boolean {
  return getObjectType(value) === ObjectType.AsyncFunction;
}
