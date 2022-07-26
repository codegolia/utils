import { isEqualLength } from '../src/isEqualLength';

describe('Is equal length', () => {
  test('should be true if value is equal length', () => {
    expect(isEqualLength('123', 3)).toBe(true);
    expect(isEqualLength([1, 2, 3], 3)).toBe(true);
  });

  test('should be false if value is not equal length', () => {
    expect(isEqualLength('123', 4)).toBe(false);
    expect(isEqualLength([1, 2, 3], 4)).toBe(false);
  });
});
