import { lessThanOrEqualTo } from '../../src/number';

describe(lessThanOrEqualTo.name, () => {
  it('Filters for numbers that are less than or equal to the given argument', () => {
    const result = [10, 20, 30, 40, 50, 60].filter(lessThanOrEqualTo(40));
    expect(result).toEqual([10, 20, 30, 40]);
  });
});
