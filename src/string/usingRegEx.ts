/**
 * @param pattern The regular expression each item should match
 * to be returned in the resulting array.
 * @example
 * ```ts
 * ['abc', 'def', 'hij'].filter(usingRegex(/bc/));
 * // returns ['abc'];
 * ```
 */
export const usingRegex = (pattern: RegExp) => (x: string) => pattern.test(x);
