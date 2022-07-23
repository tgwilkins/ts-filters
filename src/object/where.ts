import { Where } from '..';
import { compareWhere } from '../util/compareWhere';

/**
 *
 * @param properties A partial representation of the interface the objects
 * in the list conform to, to act as a query.
 * @example
 * ```ts
 * const a = { x: 1, y: { nested: { property: 'hello' } } };
 * const b = { x: 1, y: { nested: { property: 'goodbye' } } };
 * 
 * [a, b].filter(where({ x: 1 }));
 * // returns [a, b]
 * 
 * [a, b].filter(where({ y: { nested: { property: 'goodbye' } } }));
 * // returns [b]
```
 */
export const where =
  <T extends object>(properties: Where<T>) =>
  (item: T) =>
    compareWhere(properties, item);
