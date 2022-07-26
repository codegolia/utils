import { isJSON } from '../src/isJSON';

describe('Is JSON', () => {
  test('should be true if value is JSON', () => {
    expect(isJSON(`{ "success": true }`)).toBe(true);
  });

  test('should be false if value is not JSON', () => {
    expect(isJSON({})).toBe(false);
  });
});
