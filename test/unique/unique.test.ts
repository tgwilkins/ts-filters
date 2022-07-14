import { unique } from '../../src/unique/unique';

describe(unique.name, () => {
  it('Filters out duplicate values', () => {
    const result = [1, 1, 2, 1, 3, 2, 1, 2, 4, 5].filter(unique);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
