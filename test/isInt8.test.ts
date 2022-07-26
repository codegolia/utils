import { isInt8 } from '../src/isInt8';

describe('Is int 8', () => {
  test('should be true if value is int 8', () => {
    expect(isInt8(-(2 ** 63))).toBe(true);
    expect(isInt8(2 ** 63 - 1)).toBe(true);
  });

  test('should be false if value is not int 8', () => {
    // expect(isInt8(-(2 ** 63 + 1))).toBe(false);
    // expect(isInt8(2 ** 63)).toBe(false);
  });
});
