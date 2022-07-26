import { isFloat64Array } from '../src/isFloat64Array';

describe('Is float 64 array', () => {
  test('should be true if value is float 64 array', () => {
    expect(isFloat64Array(new Float64Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not float 64 array', () => {
    expect(isFloat64Array([21, 31])).toBe(false);
  });
});
