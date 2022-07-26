import { isFloat } from '../src/isFloat';

describe('Is float', () => {
  test('should be true if value is float', () => {
    expect(isFloat(1.1)).toBe(true);
    expect(isFloat(1.01)).toBe(true);
  });

  test('should be false if value is not float', () => {
    expect(isFloat(2.0)).toBe(false);
    expect(isFloat(2)).toBe(false);
  });
});
