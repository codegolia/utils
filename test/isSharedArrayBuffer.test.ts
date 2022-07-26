import { isSharedArrayBuffer } from '../src/isSharedArrayBuffer';

describe('Is shared array buffer', () => {
  test('should be true if value is shared array buffer', () => {
    expect(isSharedArrayBuffer(new SharedArrayBuffer(1))).toBe(true);
  });

  test('should be false if value is not shared array buffer', () => {
    expect(isSharedArrayBuffer({})).toBe(false);
  });
});
