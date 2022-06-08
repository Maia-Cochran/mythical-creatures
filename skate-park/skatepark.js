class SkatePark {
  constructor (parkInfo, status){

    this.name = parkInfo.name;
    this.yearFounded = parkInfo.year;
    this.style = parkInfo.type;
    this.features = parkInfo.features;
    this.isPrivate = parkInfo.isPrivate || false;
    this.cost = parkInfo.price || 0;
    this.occupants = [];
console.log(parkInfo.occupants)
  }
  admit(skater){
    console.log(skater)
    if(this.occupants.length >= 3){
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    }
    if(!this.isPrivate){
      this.occupants.push(skater);
      return `Welcome to the free Major Taylor Skatepark!`
    }else if(this.cost <= skater.money) {
      skater.money -= this.cost;
      this.occupants.push(skater);
    return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
  } else {
    return `Sorry, you don't have enough money.`
    }
  }
}



module.exports = SkatePark;
