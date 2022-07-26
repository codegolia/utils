import { isRangeError } from '../src/isRangeError';

describe('Is eval error', () => {
  test('should be true if value is eval error', () => {
    expect(isRangeError(new RangeError(''))).toBe(true);
  });

  test('should be false if value is not eval error', () => {
    expect(isRangeError({})).toBe(false);
  });
});
