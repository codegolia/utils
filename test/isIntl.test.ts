import { isIntl } from '../src/isIntl';

describe('Is intl', () => {
  test('should be true if value is intl', () => {
    expect(isIntl(Intl)).toBe(true);
  });

  test('should be false if value is not intl', () => {
    expect(isIntl({})).toBe(false);
  });
});
