import { Comparer } from '../models/Comparer';

/**
 * Filters out duplicate items, using your own comparison function.
 * @param comparer A comparison function to run against items in the list
 * @example
 * ```ts
 * const items = [{ hello: 'world' }, { hello: 'world' }];
 * items.filter(uniqueBy((a, b) => a.hello === b.hello));
 * // [{ hello: 'world' }]
 * ```
 */
export const uniqueBy =
  <T>(comparer: Comparer<T>) =>
  (a: T, index: number, list: T[]) =>
    list.findIndex((b) => comparer(a, b)) === index;
