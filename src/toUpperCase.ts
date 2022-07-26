import { isString } from './isString';

export function toUpperCase(value: string): string {
  if (!isString(value)) return '';

  return value.toUpperCase();
}
