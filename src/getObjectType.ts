export function getObjectType(objectType: any): string {
  return Object.prototype.toString.call(objectType);
}
