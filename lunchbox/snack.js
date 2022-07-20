class Snack {
  constructor(snackType){
    this.deliciousLevel = 'extra'
    this.type = snackType
    this.amount = 100
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    this.isHealthy = false;
  }
  getEaten(){
    this.amount -= 10
    if(this.amount <= 20){
      this.cuttingItClose = true;
    }
  }
  checkForHealthy(snack){
    if(this.type.toLowerCase().includes('fruit')){
      this.isHealthy = true;
    }
    return this.isHealthy;
    //we are going to check to see if the snack type(this.type)
    //includes/contains the word 'fruit'
    //lowercase the type first
  }
}

module.exports = Snack;
