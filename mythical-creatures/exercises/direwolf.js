class Direwolf {
  constructor(wolfName, home, size){
    this.name = wolfName;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive'
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark){
    if(this.home === stark.location && this.starksToProtect.length < 2){
    this.starksToProtect.push(stark)
    stark.safe = true;
    this.huntsWhiteWalkers = false;
    }
  }
  leave(stark){
    this.starksToProtect = [];
    stark.safe = false;
    }
  }

module.exports = Direwolf;
