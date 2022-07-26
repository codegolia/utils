import { isPercent } from '../src/isPercent';

describe('Is percent', () => {
  test('should be true if value is percent', () => {
    expect(isPercent(1)).toBe(true);
  });

  test('should be false if value is not percent', () => {
    expect(isPercent(101)).toBe(false);
  });
});
