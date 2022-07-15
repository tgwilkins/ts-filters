/**
 *
 * @param x The value each item should be shorter than, or equal to in length to pass the predicate.
 * @example
 * ```ts
 * ['a', 'ab'].filter(ofMaximumLength(1));
 * // ['a']
 * ```
 */
export const ofMaximumLength = (x: number) => (y: string) => y.length <= x;
