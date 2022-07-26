import { isDecimal } from '../src/isDecimal';

describe('Is decimal', () => {
  test('should be true if value is decimal', () => {
    expect(isDecimal(123.2, 1)).toBe(true);
    expect(isDecimal(123.22, 2)).toBe(true);
  });

  test('should be false if value is not decimal', () => {
    expect(isDecimal(123.2, 2)).toBe(false);
  });
});
