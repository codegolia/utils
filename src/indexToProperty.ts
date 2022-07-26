import { isString } from './isString';

export function indexToProperty(index: string): string {
  if (!isString(index)) return '';

  return index.replace(/\[(\w+)\]/g, '.$1');
}
