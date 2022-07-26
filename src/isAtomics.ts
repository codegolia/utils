import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isAtomics(value: any): value is Atomics {
  return getObjectType(value) === ObjectType.Atomics;
}
