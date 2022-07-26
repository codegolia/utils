export function isBit(value: any): value is 0 | -0 | 0n | -0n | 1 {
  switch (value) {
    case 0:
      return true;
    case -0:
      return true;
    case 0n:
      return true;
    case -0n:
      return true;
    case 1:
      return true;
    default:
      return false;
  }
}
