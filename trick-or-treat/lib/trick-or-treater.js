class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy){
    this.countCandies++
    this.hasCandy = true;
    this.bag.fill(candy);
  }
  eat(){
    this.countCandies --
    return this.bag.candies.length = 0
  }
}

module.exports = TrickOrTreater;
