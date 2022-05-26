class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
  }
  robShip() {
    if (this.booty === 500) {
    this.cursed = true;
    return 'ARG! I\'ve been cursed!'
  }
    if (this.cursed === false) {
    this.booty += 100;
  }
  return 'YAARRR!';
  }

  liftCurse() {
    if (this.booty >= 300 && this.cursed) {
    this.cursed = false;
    this.booty -= 300;
    return 'Your curse has been lifted!'
    }
    // if (this.booty === 100) {
    return 'You don\'t need to lift a curse!'
    // }
  }
}

module.exports = Pirate;
