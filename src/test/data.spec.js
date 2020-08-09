require('../main.js');


describe('numberWithCommas', () => {
  it('is a function', () => {
    expect(typeof numberWithCommas).toBe('function');
  });

  it('returns `numberWithCommas`', () => {
    expect(numberWithCommas()).toBe('numberWithCommas');
  });
});