import { toSnakeCase } from './toSnakeCase';

export function isSnakeCase(value: string): boolean {
  return toSnakeCase(value) === value;
}
