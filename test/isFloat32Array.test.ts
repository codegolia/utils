import { isFloat32Array } from '../src/isFloat32Array';

describe('Is float 32 array', () => {
  test('should be true if value is float 32 array', () => {
    expect(isFloat32Array(new Float32Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not float 32 array', () => {
    expect(isFloat32Array([21, 31])).toBe(false);
  });
});
