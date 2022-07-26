import { isEven } from '../src/isEven';

describe('Is even', () => {
  test('should be true if value is even', () => {
    expect(isEven(2)).toBe(true);
  });

  test('should be false if value is not even', () => {
    expect(isEven(1)).toBe(false);
  });
});
