import { isPrimitiveOrNull } from '../util/isPrimitiveOrNull';
import { objectKeys } from '../util/objectKeys';
// eslint-disable-next-line unused-imports/no-unused-imports-ts
import { uniqueBy } from '../';

/**
 * Designed to be used in conjunction with {@link uniqueBy} to filter out duplicate
 * objects or arrays.
 * Values are recursively checked to account for nesting.
 * @example
 * ```ts
 * [{ x: 1, y: 2 }, { x: 1, y: 2 }].filter(uniqueBy(deepEqual));
 * // returns [{ x: 1, y: 2 }]
 * ```
 */
export const deepEqual = <T extends Object>(a: T, b: T): boolean => {
  const keys = objectKeys(a);
  return (
    keys.length === Object.keys(b).length &&
    keys.every((key) => {
      const valueA = a[key];
      const valueB = b[key];
      if (isPrimitiveOrNull(valueA)) {
        return valueA === valueB;
      }
      return deepEqual(valueA, valueB);
    })
  );
};
