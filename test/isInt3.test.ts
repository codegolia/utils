import { isInt3 } from '../src/isInt3';

describe('Is int 3', () => {
  test('should be true if value is int 3', () => {
    expect(isInt3(-8388608)).toBe(true);
    expect(isInt3(8388607)).toBe(true);
  });

  test('should be false if value is not int 3', () => {
    expect(isInt3(-8388609)).toBe(false);
    expect(isInt3(8388608)).toBe(false);
  });
});
