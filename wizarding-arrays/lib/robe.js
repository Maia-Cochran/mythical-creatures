class Robe {
  constructor(pockets){
    this.pockets = [[], [], [], [], [], [], [], [], [], []]
  }
  addToPocket(thing){
    this.pockets[0].push(thing);
    if(this.pockets.length >= 1) {

    }
  }
}

module.exports = Robe;
