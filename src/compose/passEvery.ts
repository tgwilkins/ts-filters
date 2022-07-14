import { Predicate } from '../models/Predicate';
import { invokeWith } from '../util/invokeWith';

/**
 *
 * @param predicates Any number of predicate functions each item should pass
 * to be returned in the resulting array.
 * @example
 * ```ts
 * [1, 2, 3, 4].fiter(passEvery(greaterThan(2), multipleOf(2)));
 * // [4]
 * ```
 */
export const passEvery =
  <T>(...predicates: Predicate<T>[]) =>
  (item: T, index: number, array: T[]) =>
    predicates.every(invokeWith(item, index, array));
