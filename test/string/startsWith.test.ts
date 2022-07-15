import { startsWith } from '../../src';

describe(startsWith.name, () => {
  it('Filters out strings that do not start with the given string', () => {
    const result = ['one', 'two', 'three', 'four'].filter(startsWith('t'));
    expect(result).toEqual(['two', 'three']);
  });
});
