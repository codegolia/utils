import { isMaxLength } from '../src/isMaxLength';

describe('Is max length', () => {
  test('should be true if value is inside max length', () => {
    expect(isMaxLength('123', 4)).toBe(true);
    expect(isMaxLength([1, 2, 3], 4)).toBe(true);
  });

  test('should be false if value is not inside max length', () => {
    expect(isMaxLength('123', 2)).toBe(false);
    expect(isMaxLength([1, 2, 3], 2)).toBe(false);
  });
});
