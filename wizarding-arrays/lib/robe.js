class Robe {
  constructor(pockets){
    this.pockets = [[], [], [], [], [], [], [], [], [], []]
  }
  addToPocket(thing){
    for (var i = 0; i < this.pockets.length; i++){
      if(this.pockets[i].length === 0) {
        this.pockets[i].push(thing);
        return
      }
    }
  }
  retrieve(item){
    for (var i = 0; i < this.pockets.length; i++){
      if(this.pockets[i][0] === item){
        this.pockets[i].pop(item);
        return item
        }
  //searching through all pockets
  // if the value inside of the current
  //pocket is equal to the search value
  //then remove item from pocket and
  //return that value
    }
  }
  emptyAllPockets(){
    this.pockets = [[], [], [], [], [], [], [], [], [], []]
  }
}

module.exports = Robe;
