import { isBit } from '../src/isBit';

describe('Is bit', () => {
  test('should be true if value is bit', () => {
    expect(isBit(0)).toBe(true);
    expect(isBit(1)).toBe(true);
  });

  test('should be false if value is not bit', () => {
    expect(isBit(2)).toBe(false);
  });
});
