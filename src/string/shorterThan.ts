/**
 *
 * @param x The value each item should be shorter than in length to pass the predicate.
 * @example
 * ```ts
 * ['a', 'ab'].filter(shorterThan(2));
 * // ['a']
 * ```
 */
export const shorterThan = (x: number) => (y: string) => y.length < x;
