import { isUint } from '../src/isUint';

describe('Is unsigned int', () => {
  test('should be true if value is unsigned int', () => {
    expect(isUint(0)).toBe(true);
    expect(isUint(10)).toBe(true);
  });

  test('should be false if value is not unsigned int', () => {
    expect(isUint(-1)).toBe(false);
    expect(isUint(-2)).toBe(false);
  });
});
