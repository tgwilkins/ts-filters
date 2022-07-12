/**
 *
 * @param x The number each item should be less than to pass the predicate.
 * ```ts
 * [1,2,3].filter(lessThan(2));
 * // [1]
 * ```
 */
export const lessThan = (x: number) => (y: number) => y < x;
