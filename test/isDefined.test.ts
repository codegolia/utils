import { isDefined } from '../src/isDefined';

describe('Is defined', () => {
  test('should be true if value is defined', () => {
    expect(isDefined(1)).toBe(true);
    expect(isDefined('1')).toBe(true);
    expect(isDefined(true)).toBe(true);
    expect(isDefined({ success: true })).toBe(true);
    expect(isDefined([1, 2, 3])).toBe(true);
  });

  test('should be false if value is not defined', () => {
    expect(isDefined(0)).toBe(false);
    expect(isDefined('')).toBe(false);
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
    expect(isDefined(false)).toBe(false);
    expect(isDefined([])).toBe(false);
    expect(isDefined({})).toBe(false);
  });
});
