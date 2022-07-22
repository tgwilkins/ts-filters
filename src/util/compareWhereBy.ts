import { WhereBy } from '..';
import { objectKeys } from './objectKeys';

export const compareWhereBy = <T extends {}>(a: WhereBy<T>, b: T): boolean => {
  return objectKeys(a).every((key) => {
    const valueA = a[key];
    const valueB = b[key];
    if (typeof valueA === 'function') {
      return valueA(valueB);
    }
    return compareWhereBy(valueA as WhereBy<typeof valueB>, valueB);
  });
};
