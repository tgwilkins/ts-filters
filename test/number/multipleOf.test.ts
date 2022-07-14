import { multipleOf } from '../../src/number/multipleOf';

describe(multipleOf.name, () => {
  it('Filters for numbers that are multiples of the given argument', () => {
    const result = [10, 20, 30, 40, 50, 60].filter(multipleOf(4));
    expect(result).toEqual([20, 40, 60]);
  });
});
