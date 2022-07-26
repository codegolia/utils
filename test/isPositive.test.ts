import { isPositive } from '../src/isPositive';

describe('Is positive', () => {
  test('should be true if value is positive', () => {
    expect(isPositive(1)).toBe(true);
  });

  test('should be false if value is not positive', () => {
    expect(isPositive(-1)).toBe(false);
  });
});
