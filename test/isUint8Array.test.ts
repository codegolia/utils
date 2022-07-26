import { isUint8Array } from '../src/isUint8Array';

describe('Is unsigned int 8 array', () => {
  test('should be true if value is unsigned int 8 array', () => {
    expect(isUint8Array(new Uint8Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not unsigned int 8 array', () => {
    expect(isUint8Array(new Int8Array([21, 31]))).toBe(false);
  });
});
