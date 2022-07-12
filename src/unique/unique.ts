import { equalTo } from '../equality/equalTo';
import { Primitive } from '../models/Primitive';

/**
 * Removes duplicates from lists of primitive values.
 * @example
 * ```ts
 * [1, 1, 2, 3, 4, 4, 4].filter(unique);
 * // [1, 2, 3, 4]
 * ```
 */
export const unique = <T extends Primitive>(
  item: T,
  index: number,
  list: T[]
) => list.findIndex(equalTo(item)) === index;
