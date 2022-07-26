import { isEmail } from '../src/isEmail';

describe('Is email', () => {
  test('should be true if value is email', () => {
    expect(isEmail('toumku@gmail.com')).toBe(true);
  });

  test('should be false if value is not email', () => {
    expect(isEmail('toumku@')).toBe(false);
  });
});
