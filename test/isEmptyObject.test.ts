import { isEmptyObject } from '../src/isEmptyObject';

describe('Is empty object', () => {
  test('should be true if value is empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('should be false if value is not empty object', () => {
    expect(isEmptyObject({ success: true })).toBe(false);
  });
});
