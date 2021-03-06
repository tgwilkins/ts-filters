import { Predicate } from '../models/Predicate';
import { invokeWith } from '../util/invokeWith';
// eslint-disable-next-line unused-imports/no-unused-imports-ts
import { and } from './and';

/**
 * @deprecated use {@link and} instead.
 * Returns items that pass all of the predicates supplied.
 * @param predicates Any number of predicate functions each item should pass
 * to be returned in the resulting array.
 * @example
 * ```ts
 * [1, 2, 3, 4].filter(passEvery(greaterThan(2), multipleOf(2)));
 * // [4]
 * ```
 */
export const passEvery =
  <T>(...predicates: Predicate<T>[]) =>
  (item: T, index: number, array: T[]) =>
    predicates.every(invokeWith(item, index, array));
