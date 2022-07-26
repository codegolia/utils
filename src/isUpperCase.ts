import { toUpperCase } from './toUpperCase';

export function isUpperCase(value: string): boolean {
  return toUpperCase(value) === value;
}
