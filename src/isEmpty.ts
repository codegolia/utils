import { getObjectType } from './getObjectType';

import { isEmptyString } from './isEmptyString';
import { isEmptyNumber } from './isEmptyNumber';
import { isEmptyObject } from './isEmptyObject';
import { isEmptyArray } from './isEmptyArray';
import { isNull } from './isNull';
import { isUndefined } from './isUndefined';
import { isFalse } from './isFalse';
import { ObjectType } from './enums';

export function isEmpty(value: any): boolean {
  const objectType = getObjectType(value);

  switch (objectType) {
    case ObjectType.Number:
      return isEmptyNumber(value);
    case ObjectType.String:
      return isEmptyString(value);
    case ObjectType.Boolean:
      return isFalse(value);
    case ObjectType.Null:
      return isNull(value);
    case ObjectType.Undefined:
      return isUndefined(value);
    case ObjectType.Object:
      return isEmptyObject(value);
    case ObjectType.Array:
      return isEmptyArray(value);
  }

  return false;
}
