import { isSyntaxError } from '../src/isSyntaxError';

describe('Is syntax error', () => {
  test('should be true if value is syntax error', () => {
    expect(isSyntaxError(new SyntaxError(''))).toBe(true);
  });

  test('should be false if value is not syntax error', () => {
    expect(isSyntaxError({})).toBe(false);
  });
});
