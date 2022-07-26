import { isString } from '../src/isString';

describe('Is string', () => {
  test('should be true if value is string', () => {
    expect(isString('123n')).toBe(true);
  });

  test('should be false if value is not string', () => {
    expect(isString(123)).toBe(false);
  });
});
