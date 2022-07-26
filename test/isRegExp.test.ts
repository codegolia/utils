import { isRegExp } from '../src/isRegExp';

describe('Is regular expression', () => {
  test('should be true if value is regular expression', () => {
    expect(isRegExp(new RegExp(''))).toBe(true);
  });

  test('should be false if value is not regular expression', () => {
    expect(isRegExp(123)).toBe(false);
  });
});
