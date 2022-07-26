import { isFalsy } from '../src/isFalsy';

describe('Is falsy', () => {
  test('should be true if value is falsy', () => {
    expect(isFalsy(false)).toBe(true);
    expect(isFalsy(0)).toBe(true);
    expect(isFalsy(-0)).toBe(true);
    expect(isFalsy(0n)).toBe(true);
    expect(isFalsy(-0n)).toBe(true);
    expect(isFalsy('')).toBe(true);
    expect(isFalsy(null)).toBe(true);
    expect(isFalsy(undefined)).toBe(true);
  });

  test('should be false if value is not falsy', () => {
    expect(isFalsy({})).toBe(false);
  });
});
