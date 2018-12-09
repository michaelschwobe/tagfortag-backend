import hello from './index';

// -----------------------------------------------------------------------------

// TODO: Write backend tests.
describe('hello', () => {
  it('Works ', () => {
    expect(hello()).toEqual('Hello World!');
    expect(hello('Backend')).toEqual('Hello Backend!');
  });
});
