class VendingMachine {
  constructor(machineInfo){
    this.id = machineInfo.id;
    this.isBroken = machineInfo.isBroken;
    this.snacks = [];
  }
  addSnacks(snack){
    if (this.snacks.length === 0){
    this.snacks.push(snack)
    return
  }
    for(var i = 0; i < this.snacks.length; i++) {
    if(this.snacks[i].name === snack.name) {
      return `Sorry, that snack is already stocked! Try adding a different snack.`
      }
      this.snacks.push(snack)
    }
  }
  purchaseSnack(name, money){
    for(var i = 0; i < this.snacks.length; i++) {
      if(this.snacks[i].name === name) {
        if(this.snacks[i].itemsInStock === 0) {
          return `Sorry, no items in stock. Try another item.`;
        }
        if (this.snacks[i].price > money){
          return `Sorry, not enough payment. Please add more money.`
        }
        this.snacks[i].removeItem();
          var change = money - this.snacks[i].price
          return `Success! Here is $${change} back!`
      }
    }
  }
}
module.exports = VendingMachine;
