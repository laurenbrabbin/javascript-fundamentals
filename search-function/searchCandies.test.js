const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('pulls all candies with Ma and under 10', () => {
    expect(searchCandies('Ma', 10)).toEqual [ 'Mars', 'Maltesers' ];
  });
  it('pulls all candies with Ma and under 2', () => {
    expect(searchCandies('Ma', 2)).toEqual [ 'Mars'];
  });
  it('pulls all candies with S and under 10', () => {
    expect(searchCandies('S', 10)).toEqual [ 'Skitties', 'Skittles', 'Starburst' ];
  });
  it('pulls all candies with S and under 4', () => {
    expect(searchCandies('S', 4)).toEqual [ 'Skitties', 'Skittles' ];
  });
  it('pulls all candies when using lower case and under 10', () => {
    expect(searchCandies('ma', 10)).toEqual [ 'Mars', 'Maltesers' ];
  });
});