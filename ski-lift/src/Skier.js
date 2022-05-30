class Skier {
  constructor(name, slopeLevel) {
    this.name = name;
    this.hasLiftTicket = true;
    this.skillLevel = 1;
    this.nextSlope = 'green circle' || slopeLevel;
  }
  takeLesson(){
    this.skillLevel++;
}

// if skill level 3 or 4, blue square
// if skill level 5 or higher, black diamond

// this.skillLevel =>
  pickSlope() {
   if (this.skillLevel >= 5) {
    this.nextSlope = 'black diamond';
    } else if (this.skillLevel >= 3) {
       this.nextSlope = 'blue square';
     }
  }
}
module.exports = Skier;
