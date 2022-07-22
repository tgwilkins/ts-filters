import { equalTo, greaterThan, whereBy } from '../../src';

describe(whereBy.name, () => {
  const createMock = (a: string, b: number) => ({
    nested: {
      a,
      b,
    },
  });
  const a = createMock('hello', 10),
    b = createMock('hello', 4),
    c = createMock('world', 10);
  const list = [a, b, c];

  it('Filters based on the nested `a` string property', () => {
    const result = list.filter(
      whereBy({
        nested: {
          a: equalTo('hello'),
        },
      })
    );
    expect(result).toEqual([a, b]);
  });

  it('Filters based on the nested `b` number property', () => {
    const result = list.filter(
      whereBy({
        nested: {
          b: greaterThan(4),
        },
      })
    );
    expect(result).toEqual([a, c]);
  });

  it('Filters based on `nested` object property', () => {
    const result = list.filter(
      whereBy({
        nested: (nested) => nested.b < 10,
      })
    );
    expect(result).toEqual([b]);
  });

  it('Filters based on multiple properties', () => {
    const result = list.filter(
      whereBy({
        nested: {
          a: equalTo('hello'),
          b: greaterThan(4),
        },
      })
    );
    expect(result).toEqual([a]);
  });
});
