import { isUpperCase } from '../src/isUpperCase';

describe('Is upper case', () => {
  test('should be true if value is upper case', () => {
    expect(isUpperCase('TOUMKU')).toBe(true);
  });

  test('should be false if value is upper case', () => {
    expect(isUpperCase('Toumku')).toBe(false);
  });
});
