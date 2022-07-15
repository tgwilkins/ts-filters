import { equalTo } from '../../src';

describe(equalTo.name, () => {
  it('Filters for items that are equal to the given argument', () => {
    const result = [1, 2, 3, 1, 2, 3, 1].filter(equalTo(1));
    expect(result).toEqual([1, 1, 1]);
  });
});
