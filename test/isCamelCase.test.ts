import { isCamelCase } from '../src/isCamelCase';

describe('Is camel case', () => {
  test('should be true if value is camel case', () => {
    expect(isCamelCase('thisIsTheSentence')).toBe(true);
  });

  test('should be false if value is camel case', () => {
    expect(isCamelCase('This is the sentence')).toBe(false);
  });
});
