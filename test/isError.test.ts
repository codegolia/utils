import { isError } from '../src/isError';

describe('Is error', () => {
  test('should be true if value is error', () => {
    expect(isError(new Error('Error'))).toBe(true);
  });

  test('should be false if value is not error', () => {
    expect(isError({})).toBe(false);
  });
});
