import { Predicate } from '../models/Predicate';

export const invokeWith =
  <T>(item: T, index?: number, array?: T[]) =>
  (predicate: Predicate<T>) =>
    predicate(item, index, array);
