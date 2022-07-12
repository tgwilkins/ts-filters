import { Primitive } from '../models/Primitive';

/**
 *
 * @param x The value each item should equal to pass the predicate
 * @returns Boolean
 */
export const equalTo =
  <T extends Primitive>(x: T) =>
  (y: T) =>
    x === y;
