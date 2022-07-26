import { isBetween } from './isBetween';

export function isPercent(value: number): boolean {
  return isBetween(value, 0, 100);
}
