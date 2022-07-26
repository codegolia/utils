import { isArrayBuffer } from '../src/isArrayBuffer';

describe('Is array buffer', () => {
  test('should be true if value is array buffer', () => {
    expect(isArrayBuffer(new ArrayBuffer(1))).toBe(true);
  });

  test('should be false if value is not array buffer', () => {
    expect(isArrayBuffer({})).toBe(false);
  });
});
