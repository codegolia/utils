import { isKeyExist } from '../src/isKeyExist';

describe('Is key exists', () => {
  const object = {
    data: [
      { id: 1, name: 'toumku' },
      { id: 2, name: 'codegolia' },
    ],
  };

  test('should be true if object has key', () => {
    expect(isKeyExist(object, 'data[0]')).toBe(true);
  });

  test("should be false if object hasn't key", () => {
    expect(isKeyExist(object, 'data[2]')).toBe(false);
  });
});
