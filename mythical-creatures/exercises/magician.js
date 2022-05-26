class Magician {
  constructor (name, faveAccessory, clothing, assistant) {
    this.name = "The Great " + name.name;
    this.assistant = name.assistant;
    this.favoriteAccessory = name.clothing || 'top hat';
    this.confidencePercentage = 10;
}
  performIncantation(tada) {
    tada.toUpperCase();
    return `${tada.toUpperCase()}!`
  }
  performTrick(){
    this.confidencePercentage += 10;
    if(this.favoriteAccessory === 'top hat') {
    return 'PULL RABBIT FROM TOP HAT'
  } else {
    this.favoriteAccessory != 'top hat'
    return 'PULL DOVE FROM SLEEVE'
    }
  }
  performShowStopper(){
    if(this.confidencePercentage < 100 || this.assistant === false) {
    return 'Oh no, this trick is not ready!'
  } else {
    return 'WOW! The magician totally just sawed that person in half!'
      }
    }
  }

module.exports = Magician;
