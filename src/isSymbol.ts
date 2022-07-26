import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isSymbol(value: any): value is Symbol {
  return getObjectType(value) === ObjectType.Symbol;
}
