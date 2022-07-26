import { isNullish } from '../src/isNullish';

describe('Is nullish', () => {
  test('should be true if value is nullish', () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
  });

  test('should be false if value is not nullish', () => {
    expect(isNullish({})).toBe(false);
  });
});
