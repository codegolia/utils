import { isString } from './isString';

export function isJSON(value: any): value is JSON {
  try {
    if (!isString(value)) return false;

    JSON.parse(value);

    return true;
  } catch (err) {
    return false;
  }
}
