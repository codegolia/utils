export function isEvalError(value: any): value is EvalError {
  return value instanceof EvalError;
}
