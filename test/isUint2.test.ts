import { isUint2 } from '../src/isUint2';

describe('Is unsigned int 2', () => {
  test('should be true if value is unsigned int 2', () => {
    expect(isUint2(0)).toBe(true);
    expect(isUint2(65535)).toBe(true);
  });

  test('should be false if value is not unsigned int 2', () => {
    expect(isUint2(-1)).toBe(false);
    expect(isUint2(65536)).toBe(false);
  });
});
