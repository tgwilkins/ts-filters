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

  it('Filters out items that do not match the given partial', () => {
    const a = createMock(1, 2);
    const b = createMock(1, 3);
    const c = createMock(2, 2);

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
});
