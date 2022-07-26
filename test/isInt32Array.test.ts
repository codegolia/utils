import { isInt32Array } from '../src/isInt32Array';

describe('Is int 32 array', () => {
  test('should be true if value is int 32 array', () => {
    expect(isInt32Array(new Int32Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not int 32 array', () => {
    expect(isInt32Array([21, 31])).toBe(false);
  });
});
