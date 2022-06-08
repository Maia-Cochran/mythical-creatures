var Wand = require('./wand.js')

class Wizard{
  constructor(wizardName){
    this.name = wizardName.name;
    this.petsCount = 0;
    this.pets = []
  }
  adoptPet(newPet){
    this.pets.push(newPet)
    this.petsCount++
  }
  petList(){
    return  `A ${this.pets[0].type} named ${this.pets[0].name}; An ${this.pets[1].type} named ${this.pets[1].name}.`
    console.log(this.pets)
  }
  getWand(wand){
    this.wand = wand;
  }
  castSpell(spell){
    var wand = new Wand();
    return wand.cast(spell);
    }
  }


module.exports = Wizard;
// this.getWand(wand);
// wand.cast(spell);
//     console.log(spell)
// return `Casting ${spell}!`
