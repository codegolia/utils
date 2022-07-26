import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isAsyncGeneratorFunction(
  value: any
): value is AsyncGeneratorFunction {
  return getObjectType(value) === ObjectType.AsyncGeneratorFunction;
}
