import { isReferenceError } from '../src/isReferenceError';

describe('Is reference error', () => {
  test('should be true if value is reference error', () => {
    expect(isReferenceError(new ReferenceError(''))).toBe(true);
  });

  test('should be false if value is not reference error', () => {
    expect(isReferenceError({})).toBe(false);
  });
});
