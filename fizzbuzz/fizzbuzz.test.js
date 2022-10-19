const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it ('returns FizzBuzz if divisible by 3 & 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
  it ('returns Fizz if divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
  it ('returns Buzz if divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });
  it ('returns number if it is not divisible by 3 or 5', () => {
    expect(fizzbuzz(7)).toBe(7);
  });
});

