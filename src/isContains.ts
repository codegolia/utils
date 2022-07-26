import { isArray } from './isArray';

export function isContains(value: any, contains: any[]): boolean {
  if (!isArray(contains)) return false;

  for (const contain of contains) {
    if (value === contain) return true;
  }

  return false;
}
