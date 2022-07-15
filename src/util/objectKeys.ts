/**
 * Utility function to retain keyof types using `Object.keys`
 * rather than the native behaviour returning `string[]`.
 */
export const objectKeys = <T extends Object>(object: T) =>
  Object.keys(object) as (keyof T)[];
