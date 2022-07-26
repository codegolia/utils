export function isSyntaxError(value: any): value is SyntaxError {
  return value instanceof SyntaxError;
}
