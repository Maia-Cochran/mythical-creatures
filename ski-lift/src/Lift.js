var Skier = require('./Skier');

class Lift {
  constructor (maxNumberOfSkiers) {
  this.inService = true;
  this.limit = maxNumberOfSkiers;
  this.skiers = [];
  this.safetyBar = 'up';
  }
  admitSkier (name, admit) {
  var skier1 = new Skier (name, admit)
  if (admit === false) {
    return `Sorry, ${name}. You need a lift ticket!`
  }
  if (this.skiers.length < this.limit) {
    this.skiers.push(skier1);
  } else {
    return `Sorry, ${name}. Please wait for the next lift!`
    }
  }
  startLift (){
  var sum = this.limit - this.skiers.length
  if (this.skiers.length === this.limit) {
    this.safetyBar = 'down';
  } else if(sum === 1) {
    return `We still need ${sum} more skier!`
  } else {
    return `We still need ${sum} more skiers!`
      }
    }
  }


module.exports = Lift;







// }
// admitSkier (name) {
// var skier1 = new Skier (name)
//   if (this.limit > this.skiers.length) {
//     this.skiers.push(skier1);
//   } else if
//   } else {
//     return `Sorry, ${name}. Please wait for the next lift!`
//   }
// }
// }

    // for (var i = 0; i < this.skiers.length; i++) {
    //   this.skiers[i].push(this.name.name);
    //     return true;

      //   }
      // }
  // this.name = Skier.name.name;
