/**
 *
 * @param x The value each item should be equal to in length to pass the predicate.
 * @example
 * ```ts
 * ['a', 'ab'].filter(ofLength(1));
 * // ['a']
 * ```
 */
export const ofLength = (length: number) => (x: string) => x.length === length;
