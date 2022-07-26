import { isDataView } from '../src/isDataView';

describe('Is data view', () => {
  test('should be true if value is data view', () => {
    expect(isDataView(new DataView(new ArrayBuffer(2)))).toBe(true);
  });

  test('should be false if value is not data view', () => {
    expect(isDataView({})).toBe(false);
  });
});
