import { toUpperCase } from '../src/toUpperCase';

describe('Is upper case', () => {
  test('should be true if value is upper case', () => {
    expect(toUpperCase('toumku')).toBe('TOUMKU');
  });

  test('should be false if value is not upper case', () => {
    expect(toUpperCase('toumku')).not.toBe('toumku');
  });
});
