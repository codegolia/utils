import { isMax } from '../src/isMax';

describe('Is max', () => {
  test('should be true if value is max', () => {
    expect(isMax(2, 5)).toBe(true);
  });

  test('should be false if value is not max', () => {
    expect(isMax(2, 1)).toBe(false);
  });
});
