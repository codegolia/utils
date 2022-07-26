import { isContains } from '../src/isContains';

describe('Is contains', () => {
  test('should be true if value is contains', () => {
    expect(isContains(1, [1, 2, 3])).toBe(true);
    expect(isContains(2, [1, 2, 3])).toBe(true);
    expect(isContains(3, [1, 2, 3])).toBe(true);
  });

  test('should be false if value is not contains', () => {
    expect(isContains(0, [1, 2, 3])).toBe(false);
    expect(isContains(4, [1, 2, 3])).toBe(false);
  });
});
