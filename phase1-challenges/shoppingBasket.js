class ShoppingBasket {
  constructor(items) {
    this.items = [] //may need to add if else
    this.total = 0
  }

  addItem(item) {
    this.items.push(item)
    this.total += item.getPrice()
  }
  
  getTotalPrice() {
    return this.total.toFixed(2)
  }
}

module.exports = ShoppingBasket;
