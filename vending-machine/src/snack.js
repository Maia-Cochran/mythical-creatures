class Snack {
  constructor(snackName, pricePerUnit){
    this.name = snackName;
    this.price = pricePerUnit;
    this.itemsInStock = 0;
  }
  stockItems(snackName, pricePerUnit){
    this.itemsInStock += snackName
  }
  removeItem(){
  this.itemsInStock --
  if (this.itemsInStock >= 1) {
    return `Item taken! There are now ${this.itemsInStock} items left.`
  } else {
    this.itemsInStock = 0;
    return `Sorry, no ${this.name} left in stock!`
    }
  }
}
module.exports = Snack;
