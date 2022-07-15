import { longerThan } from '../../src';

describe(longerThan.name, () => {
  it('Filters for strings longer than the given value', () => {
    const result = ['a', 'ab', 'abc', 'abcd'].filter(longerThan(2));
    expect(result).toEqual(['abc', 'abcd']);
  });
});
