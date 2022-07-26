import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isWebAssembly(value: any): boolean {
  return getObjectType(value) === ObjectType.WebAssembly;
}
