var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(medusaName) {
    this.name = medusaName;
    this.statues = [];
  }
  gazeAtVictim(person){
    var newStatue = new Statue(person.name);
    if (this.statues.length <= 2) {
      this.statues.push(newStatue);
    } else if (this.statues.length >= 3) {
      var returnedPerson = new Person(this.statues[0].name);
      this.statues.shift();
      this.statues.push(newStatue);
      returnedPerson.mood = 'relieved';
      return returnedPerson;
    }
  }
}

module.exports = Medusa;
