import { isInt2 } from '../src/isInt2';

describe('Is int 2', () => {
  test('should be true if value is int 2', () => {
    expect(isInt2(-32768)).toBe(true);
    expect(isInt2(32767)).toBe(true);
  });

  test('should be false if value is not int 2', () => {
    expect(isInt2(-32769)).toBe(false);
    expect(isInt2(32768)).toBe(false);
  });
});
