import { isEmptyNumber } from '../src/isEmptyNumber';

describe('Is empty number', () => {
  test('should be true if value is empty number', () => {
    expect(isEmptyNumber(0)).toBe(true);
    expect(isEmptyNumber(-0)).toBe(true);
    expect(isEmptyNumber(0n)).toBe(true);
    expect(isEmptyNumber(-0n)).toBe(true);
  });

  test('should be false if value is not empty number', () => {
    expect(isEmptyNumber({})).toBe(false);
  });
});
