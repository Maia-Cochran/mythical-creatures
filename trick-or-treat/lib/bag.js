class Bag {
  constructor(){
    this.empty = true;
    this.count = 0;
    this.candies = [];

  }
  fill(nameOfCandy){
    this.candies.push(nameOfCandy);
    this.count = this.candies.length;
    // this.count++
  }
  contains(nameOfCandy){
    console.log(this.candies.type)
    for (var i = 0; i < this.candies.length; i++) {
    if(this.candies[i].type === nameOfCandy) {
      return true;
    } else {
      return false;
      }
    }
  }
}

module.exports = Bag;
