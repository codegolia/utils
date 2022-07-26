import { isUint4 } from '../src/isUint4';

describe('Is unsigned int 4', () => {
  test('should be true if value is unsigned int 4', () => {
    expect(isUint4(0)).toBe(true);
    expect(isUint4(4294967295)).toBe(true);
  });

  test('should be false if value is not unsigned int 4', () => {
    expect(isUint4(-1)).toBe(false);
    expect(isUint4(4294967296)).toBe(false);
  });
});
