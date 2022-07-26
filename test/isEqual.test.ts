import { isEqual } from '../src/isEqual';

describe('Is equal', () => {
  test('should be true if value is equal', () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  test('should be false if value is not equal', () => {
    expect(isEqual(1, '1')).toBe(false);
  });
});
