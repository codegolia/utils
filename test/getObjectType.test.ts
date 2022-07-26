import { ObjectType } from '../src/enums';
import { getObjectType } from '../src/getObjectType';

describe('Get object type', () => {
  test('should be true if value is correct object type', () => {
    expect(getObjectType([])).toBe(ObjectType.Array);
    expect(getObjectType({})).toBe(ObjectType.Object);
  });

  test('should be false if value is incorrect object type', () => {
    expect(getObjectType([])).toBe(ObjectType.Array);
  });
});
