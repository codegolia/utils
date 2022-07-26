import { getKey } from '../src/getKey';

describe('Get object type', () => {
  const object = {
    data: [
      { id: 1, name: 'toumku' },
      { id: 2, name: 'codegolia' },
    ],
  };

  test('should be true if value is correct object type', () => {
    expect(getKey(object, 'data')).toBe(object.data);
    expect(getKey(object, 'data[0]')).toBe(object.data[0]);
    expect(getKey(object, 'data[0].name')).toBe(object.data[0].name);
  });

  test('should be false if value is incorrect object type', () => {
    expect(getKey(object, 'data2')).toBe(undefined);
    expect(getKey(object, 'data[2]')).toBe(undefined);
    expect(getKey(object, 'data[2].name')).toBe(undefined);
  });
});
