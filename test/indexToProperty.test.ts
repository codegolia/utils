import { indexToProperty } from '../src/indexToProperty';

describe('Index to property', () => {
  test('should be true if value is correct precision', () => {
    expect(indexToProperty('test[name]')).toBe('test.name');
    expect(indexToProperty('test[0]')).toBe('test.0');
  });

  test('should be false if value is incorrect precision', () => {
    expect(indexToProperty('test[name]')).not.toBe('test[name]');
  });
});
