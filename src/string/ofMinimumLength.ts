/**
 *
 * @param x The minimum length each item should have to pass the predicate.
 * ```ts
 * ['a', 'ab'].filter(ofMinimumLength(2));
 * // ['ab']
 * ```
 */
export const ofMinimumLength = (x: number) => (y: string) => y.length >= x;
