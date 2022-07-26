export function isNan(value: any): value is typeof NaN {
  return isNaN(value);
}
