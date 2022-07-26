import { isInt } from '../src/isInt';

describe('Is int', () => {
  test('should be true if value is int', () => {
    expect(isInt(123)).toBe(true);
  });

  test('should be false if value is not int', () => {
    expect(isInt(123.1)).toBe(false);
  });
});
