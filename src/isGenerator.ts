import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isGenerator(value: any): value is Generator {
  return getObjectType(value) === ObjectType.Generator;
}
