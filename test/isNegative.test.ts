import { isNegative } from '../src/isNegative';

describe('Is negative', () => {
  test('should be true if value is negative', () => {
    expect(isNegative(-1)).toBe(true);
  });

  test('should be false if value is not negative', () => {
    expect(isNegative(1)).toBe(false);
  });
});
