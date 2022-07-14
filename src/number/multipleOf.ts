/**
 *
 * @param x The number items should be a multiple of to pass the predicate
 * @example
 * ```ts
 * [1,2,3].filter(multipleOf(1));
 * // [2]
 * ```
 */
export const multipleOf = (x: number) => (y: number) => y % x === 0;
