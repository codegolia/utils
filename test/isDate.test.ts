import { isDate } from '../src/isDate';

describe('Is date', () => {
  test('should be true if value is date', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test('should be false if value is not date', () => {
    expect(isDate({})).toBe(false);
  });
});
