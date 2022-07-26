import { isWebAssembly } from '../src/isWebAssembly';

describe('Is web assembly', () => {
  test('should be true if value is web assembly', () => {
    expect(isWebAssembly(WebAssembly)).toBe(true);
  });

  test('should be false if value is not web assembly', () => {
    expect(isWebAssembly(() => {})).toBe(false);
  });
});
