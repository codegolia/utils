import { isAsyncFunction } from '../src/isAsyncFunction';

describe('Is array', () => {
  test('should be true if value is array', () => {
    let AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

    expect(isAsyncFunction(new AsyncFunction())).toBe(true);
  });

  test('should be false if value is not array', () => {
    expect(isAsyncFunction(() => {})).toBe(false);
  });
});
