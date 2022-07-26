import { isEmpty } from './isEmpty';

export function isDefined(value: any): boolean {
  return !isEmpty(value);
}
