import { Primitive } from '.';

export type WhereBy<T> = {
  [Property in keyof T & string]?:
    | (T[Property] extends Primitive | null | undefined
        ? never
        : WhereBy<T[Property]>)
    | ((arg: T[Property]) => boolean);
};
