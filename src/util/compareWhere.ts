import { Where } from '..';
import { isPrimitiveOrNull } from './isPrimitiveOrNull';
import { objectKeys } from './objectKeys';

export const compareWhere = <T extends {}>(a: Where<T>, b: T): boolean => {
  return objectKeys(a).every((key) => {
    const valueA = a[key];
    const valueB = b[key];
    if (typeof valueA === 'function') {
      return valueA(valueB);
    }
    if (isPrimitiveOrNull(valueA) || !valueA) {
      return valueA === valueB;
    }
    return compareWhere(valueA as Where<typeof valueB>, valueB);
  });
};
