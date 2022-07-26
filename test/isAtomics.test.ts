import { isAtomics } from '../src/isAtomics';

describe('Is atomics', () => {
  test('should be true if value is atomics', () => {
    expect(isAtomics(Atomics)).toBe(true);
  });

  test('should be false if value is not atomics', () => {
    expect(isAtomics({})).toBe(false);
  });
});
