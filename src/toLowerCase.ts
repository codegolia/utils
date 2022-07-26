import { isString } from './isString';

export function toLowerCase(value: string): string {
  if (!isString(value)) return '';

  return value.toLowerCase();
}
