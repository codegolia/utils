import { isUndefined } from '../src/isUndefined';

describe('Is undefined', () => {
  test('should be true if value is undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  test('should be false if value is not undefined', () => {
    expect(isUndefined(null)).toBe(false);
  });
});
