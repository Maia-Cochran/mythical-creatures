class Skater {
  constructor(skaterInfo){
    this.name = skaterInfo.name;
    this.skill = skaterInfo.skill;
    this.tricks = skaterInfo.tricks;
    this.money = skaterInfo.cash;
    this.frustration = 0
  }
  practice(tricks){
    if(!this.tricks[tricks]) {
      this.frustration++
    }
    if(this.frustration >= 3){
      this.tricks[tricks] = true;
      this.frustration = 0;
      return `I just learned to ${tricks}!!!`
    }
  }
}


module.exports = Skater;
