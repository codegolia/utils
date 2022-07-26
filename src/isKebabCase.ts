import { toKebabCase } from './toKebabCase';

export function isKebabCase(value: string): boolean {
  return toKebabCase(value) === value;
}
