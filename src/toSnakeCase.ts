import { isString } from './isString';

export function toSnakeCase(value: string): string {
  if (!isString(value)) return '';

  const words = value.split(' ');
  const snacked = [];

  for (let word of words) {
    word = word.trim();
    word = word.replace(/\./, '');
    word = word.toLowerCase();

    snacked.push(word);
  }

  return snacked.join('_');
}
