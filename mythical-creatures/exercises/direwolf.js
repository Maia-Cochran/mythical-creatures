class Direwolf {
  constructor(wolfName, home, size){
    this.name = wolfName;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive'
    this.starksToProtect = [];
  }
  protect(starkInfo){
    this.starksToProtect.length++
    starkInfo
    console.log(name)
  }
}

module.exports = Direwolf;
