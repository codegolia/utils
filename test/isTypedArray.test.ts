import { isTypedArray } from '../src/isTypedArray';

describe('Is typed array', () => {
  test('should be true if value is typed array', () => {
    expect(isTypedArray(new Int16Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not typed array', () => {
    expect(isTypedArray({})).toBe(false);
  });
});
