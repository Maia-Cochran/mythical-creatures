class Centaur {
  constructor(centaurName){
    this.name = centaurName.name;
    this.breed = centaurName.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.shotRunCount = 0;
  }
  shootBow() {
    this.shotRunCount += 1
    if(this.shotRunCount > 2 || this.standing === false) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Twang!!!';
    }
  }
  run(soundEffect) {
    this.shotRunCount += 1
    if(this.shotRunCount > 2 || this.standing === false) {
    this.cranky = true;
    return 'NO!'
    } else {
    return 'Clop clop clop clop!!!'
  }
}
  sleep(){
    if(this.layingDown === true){
      this.shotRunCount = 0;
      return 'ZZZZ';
    } else {
      return 'NO!'
    }
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
    this.cranky = false;
  }
  standUp(){
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion(){
    this.cranky = false;
    if (this.standing === false) {
      return 'Not while I\'m laying down!'
    }
  }
};

module.exports = Centaur;

// } else if(this.layingDown === false && this.standing === false){
//   this.cranky === false;
//   shootBow();
//   return 'Twang!!!'
