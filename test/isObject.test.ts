import { isObject } from '../src/isObject';

describe('Is object', () => {
  test('should be true if value is object', () => {
    expect(isObject({ success: true })).toBe(true);
  });

  test('should be false if value is not object', () => {
    expect(isObject([])).toBe(false);
  });
});
