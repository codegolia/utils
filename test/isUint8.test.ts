import { isUint8 } from '../src/isUint8';

describe('Is unsigned int 8', () => {
  test('should be true if value is unsigned int 8', () => {
    expect(isUint8(0)).toBe(true);
    expect(isUint8(2 ** 64 - 1)).toBe(true);
  });

  test('should be false if value is not unsigned int 8', () => {
    expect(isUint8(-1)).toBe(false);
    expect(isUint8(2 ** 65)).toBe(false);
  });
});
