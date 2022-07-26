import { isReflect } from '../src/isReflect';

describe('Is reflect', () => {
  test('should be true if value is reflect', () => {
    expect(isReflect(Reflect)).toBe(true);
  });

  test('should be false if value is not reflect', () => {
    expect(isReflect({})).toBe(false);
  });
});
