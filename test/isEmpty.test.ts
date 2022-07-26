import { isEmpty } from '../src/isEmpty';

describe('Is array', () => {
  test('should be true if value is empty', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(``)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
  });

  test('should be false if value is not array', () => {
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty('1')).toBe(false);
    expect(isEmpty(`1`)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty({ 1: 2 })).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
  });
});
