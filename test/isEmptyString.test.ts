import { isEmptyString } from '../src/isEmptyString';

describe('Is empty string', () => {
  test('should be true if value is empty string', () => {
    expect(isEmptyString('')).toBe(true);
  });

  test('should be false if value is not empty string', () => {
    expect(isEmptyString('123')).toBe(false);
  });
});
