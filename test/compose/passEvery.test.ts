import { passEvery } from '../../src';

describe(passEvery.name, () => {
  it('Returns true when the item passes all predicates', () => {
    const item = 2;

    const result = passEvery(
      () => true,
      () => true,
      () => true
    )(item, 0, [item]);
    expect(result).toBe(true);
  });

  it('Returns false when the item fails to pass at least one predicate', () => {
    const item = 3;
    const result = passEvery(
      () => true,
      () => false,
      () => true
    )(item, 0, [item]);
    expect(result).toBe(false);
  });
});
