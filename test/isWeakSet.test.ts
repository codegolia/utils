import { isWeakSet } from '../src/isWeakSet';

describe('Is weak set', () => {
  test('should be true if value is weak set', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  });

  test('should be false if value is not weak set', () => {
    expect(isWeakSet([])).toBe(false);
  });
});
