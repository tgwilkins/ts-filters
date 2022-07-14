import { ofLength } from '../../src/string/ofLength';

describe(ofLength.name, () => {
  it('Filters for strings equal in length to the given value', () => {
    const result = ['a', 'ab', 'abc', 'abcd'].filter(ofLength(3));
    expect(result).toEqual(['abc']);
  });
});
