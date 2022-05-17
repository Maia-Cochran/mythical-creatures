class Dragon {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.ate = 0;
    this.hungry = true;
    }
  eat() {
    this.ate ++
    if (this.ate > 2) {
    this.hungry = false
    }
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
};


module.exports = Dragon;
