import { isEvalError } from '../src/isEvalError';

describe('Is eval error', () => {
  test('should be true if value is eval error', () => {
    expect(isEvalError(new EvalError(''))).toBe(true);
  });

  test('should be false if value is not eval error', () => {
    expect(isEvalError({})).toBe(false);
  });
});
