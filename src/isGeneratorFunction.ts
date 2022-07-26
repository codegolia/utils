import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isGeneratorFunction(value: any): value is GeneratorFunction {
  return getObjectType(value) === ObjectType.GeneratorFunction;
}
