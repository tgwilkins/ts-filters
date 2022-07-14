import { passSome } from '../../src/compose/passSome';

describe(passSome.name, () => {
  it('Returns true when the item passes any predicates', () => {
    const item = 2;

    const result = passSome(
      () => false,
      () => false,
      () => true
    )(item, 0, [item]);
    expect(result).toBe(true);
  });

  it('Returns false when the item fails all predicates', () => {
    const item = 3;
    const result = passSome(
      () => false,
      () => false,
      () => false
    )(item, 0, [item]);
    expect(result).toBe(false);
  });
});
