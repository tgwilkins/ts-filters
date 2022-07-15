import { usingRegex } from '../../src';

describe(usingRegex.name, () => {
  it('Filters out strings that do not match the given pattern', () => {
    const result = ['the', 'cat', 'in', 'the', 'hat'].filter(usingRegex(/at$/));
    expect(result).toEqual(['cat', 'hat']);
  });
});
