import { isMap } from '../src/isMap';

describe('Is map', () => {
  test('should be true if value is map', () => {
    expect(isMap(new Map())).toBe(true);
  });

  test('should be false if value is not map', () => {
    expect(isMap([])).toBe(false);
  });
});
