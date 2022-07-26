import { isUint1 } from '../src/isUint1';

describe('Is unsigned int 1', () => {
  test('should be true if value is unsigned int 1', () => {
    expect(isUint1(0)).toBe(true);
    expect(isUint1(255)).toBe(true);
  });

  test('should be false if value is not unsigned int 1', () => {
    expect(isUint1(-1)).toBe(false);
    expect(isUint1(256)).toBe(false);
  });
});
