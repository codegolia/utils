import { ObjectType } from './enums';
import { getObjectType } from './getObjectType';

export function isDataView(value: any): value is DataView {
  return getObjectType(value) === ObjectType.DataView;
}
