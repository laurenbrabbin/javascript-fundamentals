const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  it('returns 0 as the total if no candies are added', () => {
    let shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket.getTotalPrice()).toEqual [0]
  })
  it('returns the total if one candy is added', () => {
    let candyDouble = { getPrice: () => 2};
    let shoppingBasket = new ShoppingBasket();
    shoppingBasket.addItem(candyDouble)

    expect(shoppingBasket.getTotalPrice()).toEqual [2];
  })
  it('returns the total if two candies are added', () => {
    let candyDouble = { getPrice: () => 2};
    let candyDouble2 = { getPrice: () => 3};
    let shoppingBasket = new ShoppingBasket();
    shoppingBasket.addItem(candyDouble);
    shoppingBasket.addItem(candyDouble2);

    expect(shoppingBasket.getTotalPrice()).toEqual [5];
  })
})