import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isError(value: any): value is Error {
  return getObjectType(value) === ObjectType.Error;
}
