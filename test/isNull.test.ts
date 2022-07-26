import { isNull } from '../src/isNull';

describe('Is null', () => {
  test('should be true if value is null', () => {
    expect(isNull(null)).toBe(true);
  });

  test('should be false if value is not null', () => {
    expect(isNull(undefined)).toBe(false);
  });
});
