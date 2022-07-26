import { isNumber } from '../src/isNumber';

describe('Is number', () => {
  test('should be true if value is number', () => {
    expect(isNumber(123)).toBe(true);
  });

  test('should be false if value is not number', () => {
    expect(isNumber('123')).toBe(false);
  });
});
