import { ofMinimumLength } from '../../src/string';

describe(ofMinimumLength.name, () => {
  it('Filters for strings longer than or equal to the given value', () => {
    const result = ['a', 'ab', 'abc', 'abcd'].filter(ofMinimumLength(2));
    expect(result).toEqual(['ab', 'abc', 'abcd']);
  });
});
