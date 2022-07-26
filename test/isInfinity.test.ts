import { isInfinity } from '../src/isInfinity';

describe('Is infinity', () => {
  test('should be true if value is infinity', () => {
    expect(isInfinity(Infinity)).toBe(true);
    expect(isInfinity(1 / 0)).toBe(true);
  });

  test('should be false if value is not infinity', () => {
    expect(isInfinity(1)).toBe(false);
  });
});
