import { isUint16Array } from '../src/isUint16Array';

describe('Is unsigned int 16 array', () => {
  test('should be true if value is unsigned int 16 array', () => {
    expect(isUint16Array(new Uint16Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not unsigned int 16 array', () => {
    expect(isUint16Array(new Int16Array([21, 31]))).toBe(false);
  });
});
