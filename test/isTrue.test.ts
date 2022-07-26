import { isTrue } from '../src/isTrue';

describe('Is true', () => {
  test('should be true if value is true', () => {
    expect(isTrue(true)).toBe(true);
  });

  test('should be false if value is not true', () => {
    expect(isTrue(false)).toBe(false);
  });
});
