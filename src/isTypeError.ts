export function isTypeError(value: any): value is TypeError {
  return value instanceof TypeError;
}
