/**
 *
 * @param x The string each item should start with to pass the predicate
 * @example
 * ```ts
 * ['one', 'two', 'three', 'four'].filter(startsWith('t'));
 * // returns ['two', 'three']
 * ```
 */
export const startsWith = (x: string) => (y: string) => y.startsWith(x);
