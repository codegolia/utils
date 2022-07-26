import { toKebabCase } from '../src/toKebabCase';

describe('Is kebab case', () => {
  test('should be true if value is kebab case', () => {
    expect(toKebabCase('This is the sentence')).toBe('this-is-the-sentence');
  });

  test('should be false if value is not kebab case', () => {
    expect(toKebabCase('This is the sentence')).not.toBe(
      'This is the sentence'
    );
  });
});
