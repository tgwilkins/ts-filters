import { deepEqual, uniqueBy } from '../../src';

describe(deepEqual.name, () => {
  it('Returns true for matching objects', () => {
    const a = {
      x: 1,
      y: 2,
      z: {
        a: 1,
      },
    };
    const b = { ...a };
    const result = deepEqual(a, b);
    expect(result).toBe(true);
  });

  it('Returns false when one of the objects has more properties', () => {
    const a = { x: 1, y: 2 };
    const b = { ...a, z: 3 };
    const result = deepEqual(a, b);
    expect(result).toBe(false);
  });

  it('Can be used in conjunction with uniqueBy to filter out duplicates', () => {
    const a = { x: 1, y: 2 };
    const b = { ...a };
    const c = { x: 3, y: 4 };
    const result = [a, b, c].filter(uniqueBy(deepEqual));
    expect(result).toEqual([a, c]);
  });
});
