import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isPromise<T>(value: any): value is Promise<T> {
  return getObjectType(value) === ObjectType.Promise;
}
