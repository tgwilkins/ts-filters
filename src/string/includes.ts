/**
 *
 * @param x The string each item should contain to pass the predicate
 * @example
 * ```ts
 * ['one', 'two', 'three', 'four'].filter(includes('o'));
 * // returns ['one', 'two', 'four']
 * ```
 */
export const includes = (x: string) => (y: string) => y.includes(x);
