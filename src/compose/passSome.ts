import { Predicate } from '../models/Predicate';
import { invokeWith } from '../util/invokeWith';
// eslint-disable-next-line unused-imports/no-unused-imports-ts
import { or } from './or';

/**
 * @deprecated use {@link or} instead.
 * Returns items that pass any of the predicates supplied.
 * @param predicates Any number of predicate functions items can pass
 * to be returned in the resulting array.
 * @example
 * ```ts
 * [1, 2, 3, 4].filter(or(greaterThan(3), multipleOf(2)));
 * // [2, 4]
 * ```
 */
export const passSome =
  <T>(...predicates: Predicate<T>[]) =>
  (item: T, index: number, array: T[]) =>
    predicates.some(invokeWith(item, index, array));
