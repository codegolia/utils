import { isArray } from '../src/isArray';

describe('Is array', () => {
  test('should be true if value is array', () => {
    expect(isArray([])).toBe(true);
  });

  test('should be false if value is not array', () => {
    expect(isArray({})).toBe(false);
  });
});
