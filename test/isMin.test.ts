import { isMin } from '../src/isMin';

describe('Is min', () => {
  test('should be true if value is min', () => {
    expect(isMin(2, 1)).toBe(true);
  });

  test('should be false if value is not min', () => {
    expect(isMin(2, 3)).toBe(false);
  });
});
