import { isEmptyArray } from '../src/isEmptyArray';

describe('Is empty array', () => {
  test('should be true if value is empty array', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  test('should be false if value is not empty array', () => {
    expect(isEmptyArray([1, 2])).toBe(false);
  });
});
