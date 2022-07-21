import { comparePartial } from '../../src/util/comparePartial';

describe(comparePartial.name, () => {
  it('Returns true if properties common to both match', () => {
    const a = { my: { nested: { property: { x: 1 } } } };
    const b = { my: { nested: { property: { x: 1, y: 1 } } } };
    expect(comparePartial(a, b)).toBe(true);
  });

  it('Returns false if properties common to both do not match', () => {
    const a = { my: { nested: { property: { x: 2 } } } };
    const b = { my: { nested: { property: { x: 1, y: 1 } } } };
    expect(comparePartial(a, b)).toBe(false);
  });
});
