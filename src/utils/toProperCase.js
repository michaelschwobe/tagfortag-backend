const toProperCase = str =>
  str
    .split(' ')
    .map(char => char.slice(0, 1).toUpperCase() + char.slice(1))
    .join(' ');

// -----------------------------------------------------------------------------

export default toProperCase;
