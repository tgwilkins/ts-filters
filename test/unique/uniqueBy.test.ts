import { uniqueBy } from '../../src';

describe(uniqueBy.name, () => {
  const a = { x: 'hello', y: 'world' };
  const b = { x: 'hello', y: 'mars' };
  const c = { x: 'goodbye', y: 'world' };
  const d = { x: 'goodbye', y: 'mars' };
  const list = [a, b, c, d];

  it('Case 1: Filters out duplicates using the given comparison function', () => {
    const result = list.filter(uniqueBy((a, b) => a.x === b.x));
    expect(result).toEqual([a, c]);
  });

  it('Case 2: Filters out duplicates using the given comparison function', () => {
    const result = list.filter(uniqueBy((a, b) => a.x === b.x && a.y === b.y));
    expect(result).toEqual(list);
  });
});
