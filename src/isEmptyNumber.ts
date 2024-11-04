import { isNumber } from './isNumber';
// import { isBigInt } from './isBigInt';

export function isEmptyNumber(value: any): value is 0 | 0n {
  if (isNumber(value)) return value === 0;
  // if (isBigInt(value)) return value === 0n;

  return false;
}
