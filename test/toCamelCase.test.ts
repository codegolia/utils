import { toCamelCase } from '../src/toCamelCase';

describe('Is camel case', () => {
  test('should be true if value is camel case', () => {
    expect(toCamelCase('This is the sentence')).toBe('thisIsTheSentence');
  });

  test('should be false if value is not camel case', () => {
    expect(toCamelCase('This is the sentence')).not.toBe(
      'This is the sentence'
    );
  });
});
