// Local modules
import toProperCase from './toProperCase';

// -----------------------------------------------------------------------------

describe('toProperCase', () => {
  it('throws without a string', () => {
    expect(() => toProperCase()).toThrow();
    expect(() => toProperCase(undefined)).toThrow();
    expect(() => toProperCase(null)).toThrow();
    expect(() => toProperCase(true)).toThrow();
    expect(() => toProperCase(1)).toThrow();
    expect(() => toProperCase({})).toThrow();
  });

  it('only uppercases the first letter of each word', () => {
    const provided = 'a shortValue of anotherLongerValue';
    const expected = 'A ShortValue Of AnotherLongerValue';
    expect(toProperCase(provided)).toEqual(expected);
  });
});
