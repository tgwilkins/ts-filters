import { DeepPartial } from '../models';
import { isPrimitiveOrNull } from './isPrimitiveOrNull';
import { objectKeys } from './objectKeys';

export const comparePartial = <T extends {}>(
  a: DeepPartial<T>,
  b: T
): boolean => {
  return objectKeys(a).every((key) => {
    const valueA = a[key];
    const valueB = b[key];
    if (isPrimitiveOrNull(valueA) || !valueA) {
      return valueA === valueB;
    }
    return comparePartial(valueA!, valueB);
  });
};
