import { isKebabCase } from '../src/isKebabCase';

describe('Is kebab case', () => {
  test('should be true if value is kebab case', () => {
    expect(isKebabCase('this-is-the-sentence')).toBe(true);
  });

  test('should be false if value is kebab case', () => {
    expect(isKebabCase('This is the sentence')).toBe(false);
  });
});
