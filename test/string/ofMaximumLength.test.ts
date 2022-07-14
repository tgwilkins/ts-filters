import { ofMaximumLength } from '../../src/string';

describe(ofMaximumLength.name, () => {
  it('Filters for strings shorter than or equal in length to the given value', () => {
    const result = ['a', 'ab', 'abc', 'abcd'].filter(ofMaximumLength(3));
    expect(result).toEqual(['a', 'ab', 'abc']);
  });
});
