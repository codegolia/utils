import { isLowerCase } from '../src/isLowerCase';

describe('Is lower case', () => {
  test('should be true if value is lower case', () => {
    expect(isLowerCase('toumku')).toBe(true);
  });

  test('should be false if value is lower case', () => {
    expect(isLowerCase('Toumku')).toBe(false);
  });
});
