import { Primitive } from '../models/Primitive';

/**
 *
 * @param x The value each item should equal to pass the predicate
 * @returns Boolean
 */
export const equalTo = (x: Primitive) => (y: Primitive) => x === y;
