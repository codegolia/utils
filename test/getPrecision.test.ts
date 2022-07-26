import { getPrecision } from '../src/getPrecision';

describe('Get precision', () => {
  test('should be true if value is correct precision', () => {
    expect(getPrecision(123)).toBe(0);
    expect(getPrecision(123.0)).toBe(0);
    expect(getPrecision(123.1)).toBe(1);
    expect(getPrecision(12.123123)).toBe(6);
  });

  test('should be false if value is incorrect precision', () => {
    expect(getPrecision(123.1)).not.toBe(2);
  });
});
