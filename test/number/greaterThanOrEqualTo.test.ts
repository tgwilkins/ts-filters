import { greaterThanOrEqualTo } from '../../src';

describe(greaterThanOrEqualTo.name, () => {
  it('Filters for numbers that are greater than or equal to the given argument', () => {
    const result = [10, 20, 30, 40, 50, 60].filter(greaterThanOrEqualTo(40));
    expect(result).toEqual([40, 50, 60]);
  });
});
