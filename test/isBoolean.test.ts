import { isBoolean } from '../src/isBoolean';

describe('Is boolean', () => {
  test('should be true if value is boolean', () => {
    expect(isBoolean(true)).toBe(true);
  });

  test('should be false if value is not boolean', () => {
    expect(isBoolean(null)).toBe(false);
  });
});
