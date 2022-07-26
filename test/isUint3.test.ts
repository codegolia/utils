import { isUint3 } from '../src/isUint3';

describe('Is unsigned int 3', () => {
  test('should be true if value is unsigned int 3', () => {
    expect(isUint3(0)).toBe(true);
    expect(isUint3(16777215)).toBe(true);
  });

  test('should be false if value is not unsigned int 3', () => {
    expect(isUint3(-1)).toBe(false);
    expect(isUint3(16777216)).toBe(false);
  });
});
