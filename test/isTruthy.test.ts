import { isTruthy } from '../src/isTruthy';

describe('Is truthy', () => {
  test('should be true if value is truthy', () => {
    expect(isTruthy([])).toBe(true);
  });

  test('should be false if value is not truthy', () => {
    expect(isTruthy(false)).toBe(false);
  });
});
