class Dragon {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.hasEaten = 0;
  }
  greet(){
    return `Hi, ${this.rider}!`
  }
  eat(){
    this.hasEaten++
    if(this.hasEaten > 2){
      this.hungry = false;
    }
  }
}
module.exports = Dragon;
// class Dragon {
//   constructor(name, rider){
//     this.name = name;
//     this.rider = rider;
//     this.ate = 0;
//     this.hungry = true;
//     }
//   eat() {
//     this.ate ++
//     if (this.ate > 2) {
//     this.hungry = false
//     }
//   }
//   greet() {
//     return `Hi, ${this.rider}!`
//   }
// };
//
//
// module.exports = Dragon;
