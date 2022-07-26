import { isBigUint64Array } from '../src/isBigUint64Array';

describe('Is big unsigned int 64 array', () => {
  test('should be true if value is big unsigned int 64 array', () => {
    expect(isBigUint64Array(new BigUint64Array([21n, 31n]))).toBe(true);
  });

  test('should be false if value is not big unsigned int 64 array', () => {
    expect(isBigUint64Array([21n, 31n])).toBe(false);
  });
});
