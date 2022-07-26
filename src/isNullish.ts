import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

export function isNullish(value: any): value is null | undefined {
  if (isNull(value)) return true;
  if (isUndefined(value)) return true;

  return false;
}
