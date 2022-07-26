import { isString } from './isString';

export function toCamelCase(value: string): string {
  if (!isString(value)) return '';

  const words = value.split(' ');
  const cameled = [];

  let isFirst = true;
  for (let word of words) {
    word = word.trim();
    word = word.replace(/\./, '');

    if (isFirst) {
      const firstChar = word.charAt(0).toLowerCase();
      const remainChar = word.substring(1);

      cameled.push(firstChar + remainChar);

      isFirst = false;
    } else {
      const firstChar = word.charAt(0).toUpperCase();
      const remainChar = word.substring(1);

      cameled.push(firstChar + remainChar);
    }
  }

  return cameled.join('');
}
