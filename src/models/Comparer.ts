export interface Comparer<T> {
  (a: T, b: T): boolean;
}
