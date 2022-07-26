import { isSymbol } from '../src/isSymbol';

describe('Is symbol', () => {
  test('should be true if value is symbol', () => {
    expect(isSymbol(Symbol(123))).toBe(true);
  });

  test('should be false if value is not symbol', () => {
    expect(isSymbol(123)).toBe(false);
  });
});
