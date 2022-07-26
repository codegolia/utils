import { isOdd } from '../src/isOdd';

describe('Is odd', () => {
  test('should be true if value is odd', () => {
    expect(isOdd(1)).toBe(true);
  });

  test('should be false if value is not odd', () => {
    expect(isOdd(2)).toBe(false);
  });
});
