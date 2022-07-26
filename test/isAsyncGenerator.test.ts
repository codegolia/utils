import { isAsyncGenerator } from '../src/isAsyncGenerator';

describe('Is async generator', () => {
  test('should be true if value is async generator', () => {
    async function* createAsyncGenerator() {
      yield await Promise.resolve(1);
      yield await Promise.resolve(2);
      yield await Promise.resolve(3);
    }

    expect(isAsyncGenerator(createAsyncGenerator())).toBe(true);
  });

  test('should be false if value is not async generator', () => {
    expect(isAsyncGenerator(() => {})).toBe(false);
  });
});
