import { Predicate } from '../models/Predicate';
import { invokeWith } from '../util/invokeWith';

export const passSome =
  <T>(...predicates: Predicate<T>[]) =>
  (item: T, index: number, array: T[]) =>
    predicates.some(invokeWith(item, index, array));
