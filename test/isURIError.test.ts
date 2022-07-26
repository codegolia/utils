import { isURIError } from '../src/isURIError';

describe('Is URI error', () => {
  test('should be true if value is URI error', () => {
    expect(isURIError(new URIError(''))).toBe(true);
  });

  test('should be false if value is not URI error', () => {
    expect(isURIError({})).toBe(false);
  });
});
