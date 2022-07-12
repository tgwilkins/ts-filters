/**
 *
 * @param x The number items should be greater than or equal to, to pass the predicate
 * @example
 * ```ts
 * [1,2,3].filter(greaterThanOrEqualTo(2));
 * // [2,3]
 * ```
 */
export const greaterThanOrEqualTo = (x: number) => (y: number) => y >= x;
