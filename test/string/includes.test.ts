import { includes } from '../../src';

describe(includes.name, () => {
  it('Filters out strings that do not contain the given string', () => {
    const result = ['one', 'two', 'three', 'four'].filter(includes('o'));
    expect(result).toEqual(['one', 'two', 'four']);
  });
});
