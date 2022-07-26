import { isBetween } from '../src/isBetween';

describe('Is between', () => {
  test('should be true if value is between', () => {
    expect(isBetween(3, 2, 5)).toBe(true);
    expect(isBetween(2, 2, 5)).toBe(true);
    expect(isBetween(5, 2, 5)).toBe(true);
  });

  test('should be false if value is not between', () => {
    expect(isBetween(1, 2, 5)).toBe(false);
    expect(isBetween(6, 2, 5)).toBe(false);
  });
});
