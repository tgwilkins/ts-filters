import { compareWhere } from '../../src/util/compareWhere';

describe(compareWhere.name, () => {
  it('Returns true if properties common to both match', () => {
    const a = { my: { nested: { property: { x: 1 } } } };
    const b = { my: { nested: { property: { x: 1, y: 1 } } } };
    expect(compareWhere(a, b)).toBe(true);
  });

  it('Returns false if properties common to both do not match', () => {
    const a = { my: { nested: { property: { x: 2 } } } };
    const b = { my: { nested: { property: { x: 1, y: 1 } } } };
    expect(compareWhere(a, b)).toBe(false);
  });

  it('Returns true if all predicates return true', () => {
    const a = {
      my: {
        nested: {
          property: { x: (x: number) => x === 1 },
          y: (y: number) => y > 0,
        },
      },
    };
    const b = { my: { nested: { property: { x: 1, y: 1 } } } };
    expect(compareWhere(a, b)).toBe(true);
  });

  it('Returns false if any predicates return false', () => {
    const a = {
      my: {
        nested: {
          property: { x: (x: number) => x === 1 },
          y: (y: number) => y > 1,
        },
      },
    };
    const b = { my: { nested: { property: { x: 1, y: 1 } } } };
    expect(compareWhere(a, b)).toBe(false);
  });
});
