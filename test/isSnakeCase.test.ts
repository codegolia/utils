import { isSnakeCase } from '../src/isSnakeCase';

describe('Is snake case', () => {
  test('should be true if value is snake case', () => {
    expect(isSnakeCase('this_is_the_sentence')).toBe(true);
  });

  test('should be false if value is snake case', () => {
    expect(isSnakeCase('This is the sentence')).toBe(false);
  });
});
