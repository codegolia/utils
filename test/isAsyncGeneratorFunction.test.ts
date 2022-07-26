import { isAsyncGeneratorFunction } from '../src/isAsyncGeneratorFunction';

describe('Is async generator function', () => {
  test('should be true if value is async generator function', () => {
    const AsyncGeneratorFunction = Object.getPrototypeOf(
      async function* () {}
    ).constructor;

    expect(isAsyncGeneratorFunction(new AsyncGeneratorFunction())).toBe(true);
  });

  test('should be false if value is not async generator function', () => {
    expect(isAsyncGeneratorFunction(() => {})).toBe(false);
  });
});
