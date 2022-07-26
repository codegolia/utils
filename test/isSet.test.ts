import { isSet } from '../src/isSet';

describe('Is set', () => {
  test('should be true if value is set', () => {
    expect(isSet(new Set())).toBe(true);
  });

  test('should be false if value is not set', () => {
    expect(isSet([])).toBe(false);
  });
});
