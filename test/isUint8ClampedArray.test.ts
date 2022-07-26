import { isUint8ClampedArray } from '../src/isUint8ClampedArray';

describe('Is unsigned int 8 clamped array', () => {
  test('should be true if value is unsigned int 8 clamped array', () => {
    expect(isUint8ClampedArray(new Uint8ClampedArray([21, 31]))).toBe(true);
  });

  test('should be false if value is not unsigned int 8 clamped array', () => {
    expect(isUint8ClampedArray(new Int8Array([21, 31]))).toBe(false);
  });
});
