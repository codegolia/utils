import { isUint32Array } from '../src/isUint32Array';

describe('Is unsigned int 32 array', () => {
  test('should be true if value is unsigned int 32 array', () => {
    expect(isUint32Array(new Uint32Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not unsigned int 32 array', () => {
    expect(isUint32Array(new Int32Array([21, 31]))).toBe(false);
  });
});
