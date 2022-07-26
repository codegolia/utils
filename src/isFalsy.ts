import { isObject } from './isObject';
import { isSymbol } from './isSymbol';
import { isFalse } from './isFalse';
import { isEmptyNumber } from './isEmptyNumber';
import { isEmptyString } from './isEmptyString';
import { isNull } from './isNull';
import { isUndefined } from './isUndefined';
import { isNan } from './isNan';

export function isFalsy(
  value: any
): value is false | 0 | -0 | 0n | -0n | '' | null | undefined {
  if (isObject(value)) return false;
  if (isSymbol(value)) return false;

  if (isFalse(value)) return true;
  if (isEmptyNumber(value)) return true;
  if (isEmptyString(value)) return true;
  if (isNull(value)) return true;
  if (isUndefined(value)) return true;
  if (isUndefined(value)) return true;
  if (isNan(value)) return true;

  return false;
}
