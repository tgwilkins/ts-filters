import { isPrimitiveOrNull } from '../../src/util/isPrimitiveOrNull';

describe(isPrimitiveOrNull.name, () => {
  const cases = [
    { value: 1, expected: true },
    { value: [], expected: false },
    { value: {}, expected: false },
    { value: true, expected: true },
    { value: null, expected: true },
    { value: undefined, expected: false },
    { value: '', expected: true },
  ];

  for (const { value, expected } of cases) {
    it(`Returns ${expected} for ${value}`, () => {
      expect(isPrimitiveOrNull(value)).toBe(expected);
    });
  }
});
