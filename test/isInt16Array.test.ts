import { isInt16Array } from '../src/isInt16Array';

describe('Is int 16 array', () => {
  test('should be true if value is int 16 array', () => {
    expect(isInt16Array(new Int16Array([21, 31]))).toBe(true);
  });

  test('should be false if value is not int 16 array', () => {
    expect(isInt16Array([21, 31])).toBe(false);
  });
});
