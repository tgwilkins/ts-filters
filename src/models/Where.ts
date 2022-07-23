import { Primitive } from '.';

export type Where<T> = {
  [Property in keyof T & string]?:
    | (T[Property] extends Primitive | null | undefined
        ? T[Property]
        : Where<T[Property]>)
    | ((arg: T[Property]) => boolean);
};
