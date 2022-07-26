import { isInt8Array } from '../src/isInt8Array';

describe('Is int 8 array', () => {
  test('should be true if value is int 8 array', () => {
    expect(isInt8Array(new Int8Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not int 8 array', () => {
    expect(isInt8Array([21, 31])).toBe(false);
  });
});
