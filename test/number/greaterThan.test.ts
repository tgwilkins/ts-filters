import { greaterThan } from '../../src';

describe(greaterThan.name, () => {
  it('Filters for numbers that are greater than or equal to the given argument', () => {
    const result = [10, 20, 30, 40, 50, 60].filter(greaterThan(40));
    expect(result).toEqual([50, 60]);
  });
});
