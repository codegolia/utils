import { isMath } from '../src/isMath';

describe('Is math', () => {
  test('should be true if value is math', () => {
    expect(isMath(Math)).toBe(true);
  });

  test('should be false if value is not math', () => {
    expect(isMath({})).toBe(false);
  });
});
