import { setKey } from '../src/setKey';

describe('Set key', () => {
  const object = {
    data: [
      { id: 1, name: 'toumku' },
      { id: 2, name: 'codegolia' },
    ],
  };

  test('should be true if value is setted', () => {
    expect(setKey(object, 'data[2]', 123)).toBe(true);
    expect(setKey(object, 'data[2].name', 123)).toBe(true);
  });

  test('should be false if value is not setted', () => {});
});
