var Snack = require('./snack')

class LunchBox {
  constructor(ownerInfo){
    this.owner = ownerInfo.owner;
    this.material = ownerInfo.madeOf;
    this.shape = ownerInfo.shape;
    this.color = ownerInfo.color;
    this.snacks = []
  }
  acquireSnack(fruitSnack){
    this.snacks.push(fruitSnack);
    fruitSnack.isInLunchBox = true;
  }
  findHealthySnacks(){
    var healthySnacks = []
    for (var i=0; i < this.snacks.length; i++){
    if(this.snacks[i].checkForHealthy()){
    healthySnacks.push(this.snacks[i].type)
      }
    }
      return healthySnacks
  }
}

module.exports = LunchBox;
