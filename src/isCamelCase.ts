import { toCamelCase } from './toCamelCase';

export function isCamelCase(value: string): boolean {
  return toCamelCase(value) === value;
}
