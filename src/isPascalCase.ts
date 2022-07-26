import { toPascalCase } from './toPascalCase';

export function isPascalCase(value: string): boolean {
  return toPascalCase(value) === value;
}
