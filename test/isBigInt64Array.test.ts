import { isBigInt64Array } from '../src/isBigInt64Array';

describe('Is big int 64 array', () => {
  test('should be true if value is big int 64 array', () => {
    expect(isBigInt64Array(new BigInt64Array([21n, 31n]))).toBe(true);
  });

  test('should be false if value is not big int 64 array', () => {
    expect(isBigInt64Array([21n, 31n])).toBe(false);
  });
});
