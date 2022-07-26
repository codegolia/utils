import { toSnakeCase } from '../src/toSnakeCase';

describe('Is snake case', () => {
  test('should be true if value is snake case', () => {
    expect(toSnakeCase('This is the sentence')).toBe('this_is_the_sentence');
  });

  test('should be false if value is not snake case', () => {
    expect(toSnakeCase('This is the sentence')).not.toBe(
      'This is the sentence'
    );
  });
});
