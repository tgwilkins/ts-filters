/**
 *
 * @param x The number each item should be less than, or equal to, to pass the predicate.
 * ```ts
 * [1,2,3].filter(lessThanOrEqualTo(2));
 * // [1, 2]
 * ```
 */
export const lessThanOrEqualTo = (x: number) => (y: number) => y < x;
