import { isBigInt } from '../src/isBigInt';

describe('Is big int', () => {
  test('should be true if value is big int', () => {
    expect(isBigInt(123n)).toBe(true);
  });

  test('should be false if value is not big int', () => {
    expect(isBigInt(123)).toBe(false);
  });
});
