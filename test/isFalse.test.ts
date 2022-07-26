import { isFalse } from '../src/isFalse';

describe('Is false', () => {
  test('should be true if value is false', () => {
    expect(isFalse(false)).toBe(true);
  });

  test('should be false if value is not false', () => {
    expect(isFalse(true)).toBe(false);
  });
});
