import { isMinLength } from '../src/isMinLength';

describe('Is min length', () => {
  test('should be true if value is inside min length', () => {
    expect(isMinLength('123', 2)).toBe(true);
    expect(isMinLength([1, 2, 3], 2)).toBe(true);
  });

  test('should be false if value is not inside min length', () => {
    expect(isMinLength('123', 4)).toBe(false);
    expect(isMinLength([1, 2, 3], 4)).toBe(false);
  });
});
