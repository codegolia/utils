import { toLowerCase } from './toLowerCase';

export function isLowerCase(value: string): boolean {
  return toLowerCase(value) === value;
}
