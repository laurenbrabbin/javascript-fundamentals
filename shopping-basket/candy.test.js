const Candy = require('./candy')

describe('Candy', () => {
  it('returns the name of the candy', () => {
    let candy = new Candy('Twix', 2)
    expect(candy.getName()).toEqual ('Twix');
  })
  it('returns the price of the candy', () => {
    let candy = new Candy('Twix', 2)
    expect(candy.getPrice()).toEqual (2);
  })
})