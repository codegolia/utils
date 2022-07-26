import { isInt4 } from '../src/isInt4';

describe('Is int 4', () => {
  test('should be true if value is int 4', () => {
    expect(isInt4(-2147483648)).toBe(true);
    expect(isInt4(2147483647)).toBe(true);
  });

  test('should be false if value is not int 4', () => {
    expect(isInt4(-2147483649)).toBe(false);
    expect(isInt4(2147483648)).toBe(false);
  });
});
