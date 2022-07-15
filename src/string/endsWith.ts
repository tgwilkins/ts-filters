/**
 *
 * @param x The string each item should end with to pass the predicate
 * @example
 * ```ts
 * ['one', 'two', 'three', 'four'].filter(endsWith('e'));
 * // returns ['one', 'three']
 * ```
 */
export const endsWith = (x: string) => (y: string) => y.endsWith(x);
