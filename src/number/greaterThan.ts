/**
 *
 * @param x The number items should be greater than to pass the predicate
 * @example
 * ```ts
 * [1,2,3].filter(greaterThan(1));
 * // [2,3]
 * ```
 */
export const greaterThan = (x: number) => (y: number) => y > x;
