/**
 *
 * @param x The value each item should be equal to in length to pass the predicate.
 * @example
 * ```ts
 * ['a', 'ab'].filter(whereLengthEqualTo(1));
 * // ['a']
 * ```
 */
export const whereLengthEqualTo = (length: number) => (x: string) =>
  x.length === length;
