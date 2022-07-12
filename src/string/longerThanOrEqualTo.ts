/**
 *
 * @param x The minimum length each item should have to pass the predicate.
 * ```ts
 * ['a', 'ab'].filter(longerThanOrEqualTo(2));
 * // ['ab']
 * ```
 */
export const longerThanOrEqualTo = (x: number) => (y: string) => y.length >= x;
