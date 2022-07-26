import { isFunction } from '../src/isFunction';

describe('Is function', () => {
  test('should be true if value is function', () => {
    expect(isFunction(() => {})).toBe(true);
  });

  test('should be false if value is not function', () => {
    expect(
      isFunction(
        new Promise(a => {
          a(123);
        })
      )
    ).toBe(false);
  });
});
