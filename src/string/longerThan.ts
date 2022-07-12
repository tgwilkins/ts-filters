/**
 *
 * @param x The value each item should be greater than in length have to pass the predicate.
 * @example
 * ```ts
 * ['a', 'ab'].filter(longerThan(1));
 * // ['ab']
 * ```
 */
export const longerThan = (x: number) => (y: string) => y.length > x;
