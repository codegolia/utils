import { isInt1 } from '../src/isInt1';

describe('Is int 1', () => {
  test('should be true if value is int 1', () => {
    expect(isInt1(-128)).toBe(true);
    expect(isInt1(127)).toBe(true);
  });

  test('should be false if value is not int 1', () => {
    expect(isInt1(-129)).toBe(false);
    expect(isInt1(128)).toBe(false);
  });
});
