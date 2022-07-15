import { Primitive } from '..';

/**
 * Narrowing type guard to check whether the given value is a primitive
 * or `null`.
 */
export const isPrimitiveOrNull = (arg: unknown): arg is Primitive | null =>
  ['string', 'number', 'boolean'].includes(typeof arg) || arg === null;
