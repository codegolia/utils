import { isWeakMap } from '../src/isWeakMap';

describe('Is weak map', () => {
  test('should be true if value is weak map', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });

  test('should be false if value is not weak map', () => {
    expect(isWeakMap([])).toBe(false);
  });
});
