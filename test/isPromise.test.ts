import { isPromise } from '../src/isPromise';

describe('Is promise', () => {
  test('should be true if value is promise', () => {
    expect(
      isPromise(
        new Promise(resolve => {
          resolve(123);
        })
      )
    ).toBe(true);
  });

  test('should be false if value is not promise', () => {
    expect(isPromise(() => {})).toBe(false);
  });
});
