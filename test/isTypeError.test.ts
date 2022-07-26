import { isTypeError } from '../src/isTypeError';

describe('Is type error', () => {
  test('should be true if value is type error', () => {
    expect(isTypeError(new TypeError(''))).toBe(true);
  });

  test('should be false if value is not type error', () => {
    expect(isTypeError({})).toBe(false);
  });
});
