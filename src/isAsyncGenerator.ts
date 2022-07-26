import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isAsyncGenerator(value: any): value is AsyncGenerator {
  return getObjectType(value) === ObjectType.AsyncGenerator;
}
