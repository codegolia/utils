import { isNumber } from './isNumber';
import { getPrecision } from './getPrecision';

export function isDecimal(value: any, precision: number): boolean {
  if (!isNumber(value)) return false;

  return precision === getPrecision(value);
}
