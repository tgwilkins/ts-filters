import { shorterThan } from '../../src';

describe(shorterThan.name, () => {
  it('Filters for strings shorter than the given value', () => {
    const result = ['a', 'ab', 'abc', 'abcd'].filter(shorterThan(3));
    expect(result).toEqual(['a', 'ab']);
  });
});
