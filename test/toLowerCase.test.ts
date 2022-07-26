import { toLowerCase } from '../src/toLowerCase';

describe('Is lower case', () => {
  test('should be true if value is lower case', () => {
    expect(toLowerCase('TOUMKU')).toBe('toumku');
  });

  test('should be false if value is not lower case', () => {
    expect(toLowerCase('TOUMKU')).not.toBe('TOUMKU');
  });
});
