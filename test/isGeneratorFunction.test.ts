import { isGeneratorFunction } from '../src/isGeneratorFunction';

describe('Is generator', () => {
  test('should be true if value is generator', () => {
    const GeneratorFunction = Object.getPrototypeOf(
      function* () {}
    ).constructor;

    expect(isGeneratorFunction(new GeneratorFunction())).toBe(true);
  });

  test('should be false if value is not generator', () => {
    expect(isGeneratorFunction({})).toBe(false);
  });
});
