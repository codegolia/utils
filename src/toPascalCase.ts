import { isString } from './isString';

export function toPascalCase(value: string): string {
  if (!isString(value)) return '';

  const words = value.split(' ');
  const cameled = [];

  for (let word of words) {
    word = word.trim();
    word = word.replace(/\./, '');

    const firstChar = word.charAt(0).toUpperCase();
    const remainChar = word.substring(1);

    cameled.push(firstChar + remainChar);
  }

  return cameled.join('');
}
