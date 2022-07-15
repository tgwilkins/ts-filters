import { endsWith } from '../../src';

describe(endsWith.name, () => {
  it('Filters out strings that do not end with the given string', () => {
    const result = ['one', 'two', 'three', 'four'].filter(endsWith('e'));
    expect(result).toEqual(['one', 'three']);
  });
});
