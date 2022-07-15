import { lessThan } from '../../src';

describe(lessThan.name, () => {
  it('Filters for numbers that are less than the given argument', () => {
    const result = [10, 20, 30, 40, 50, 60].filter(lessThan(40));
    expect(result).toEqual([10, 20, 30]);
  });
});
