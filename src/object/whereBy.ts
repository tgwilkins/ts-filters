import { WhereBy } from '..';
import { compareWhereBy } from '../util/compareWhereBy';

/**
 * Filters lists of objects based on predicate functions to perform against each
 * property. 
 * @param properties A partial representation of the interface the objects
 * in the list conform to, to act as a query.
 * @example
 * ```ts
 * const a = { x: 1, y: { nested: { property: 'hello' } } };
 * const b = { x: 1, y: { nested: { property: 'goodbye' } } };
 * 
 * [a, b].filter(whereBy({ x: (x) => x === 1 }));
 * // returns [a, b]
 * 
 * [a, b].filter(whereBy({ y: { nested: { property: (property) => property.length > 5  } } }));
 * // returns [b]
 * 
 * [a, b].filter(whereBy({ x: (x) => x === 1, y: { nested: { property: (property) => property === 'hello' } }}));
 * // returns [a]
```
**/
export const whereBy =
  <T extends object>(properties: WhereBy<T>) =>
  (item: T) =>
    compareWhereBy(properties, item);
