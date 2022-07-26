import { isGenerator } from '../src/isGenerator';

describe('Is generator', () => {
  test('should be true if value is generator', () => {
    function* generator() {
      yield 1;
      yield 2;
      yield 3;
    }

    expect(isGenerator(generator())).toBe(true);
  });

  test('should be false if value is not generator', () => {
    expect(isGenerator({})).toBe(false);
  });
});
