import { isNan } from '../src/isNan';

describe('Is not a number', () => {
  test('should be true if value is not a number', () => {
    expect(isNan(NaN)).toBe(true);
    expect(isNan(0 / 0)).toBe(true);
  });

  test('should be false if value is not not a number', () => {
    expect(isNan(1)).toBe(false);
  });
});
