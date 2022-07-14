export interface Predicate<T> {
  (item: T, index?: number, array?: T[]): boolean;
}
