import { where } from '../../src';

describe(where.name, () => {
  interface MyMock {
    my: {
      nested: {
        property: {
          x: number;
          y: number;
        };
      };
    };
  }

  const createMock = (x: number, y: number): MyMock => ({
    my: {
      nested: {
        property: {
          x,
          y,
        },
      },
    },
  });
  const a = createMock(1, 2);
  const b = createMock(1, 3);
  const c = createMock(2, 2);

  it('Filters out items that do not match the given partial', () => {
    const result = [a, b, c].filter(
      where({
        my: {
          nested: {
            property: {
              y: 2,
            },
          },
        },
      })
    );
    expect(result).toEqual([a, c]);
  });

  it('Filters out items that do not pass the predicate supplied for x', () => {
    const result = [a, b, c].filter(
      where({
        my: {
          nested: {
            property: {
              x: (x) => x > 1,
            },
          },
        },
      })
    );
    expect(result).toEqual([c]);
  });

  it('Filters out items that do not pass the predicate supplied for property', () => {
    const result = [a, b, c].filter(
      where({
        my: {
          nested: {
            property: (property) => property.x === 1 && property.y === 2,
          },
        },
      })
    );
    expect(result).toEqual([a]);
  });

  it('Filters out items that do not pass the predicates supplied for x and y', () => {
    const result = [a, b, c].filter(
      where({
        my: {
          nested: {
            property: {
              x: (x) => x > 1,
              y: (y) => y > 2,
            },
          },
        },
      })
    );
    expect(result).toEqual([b]);
  });
});
