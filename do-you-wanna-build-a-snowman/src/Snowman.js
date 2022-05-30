class Snowman {
  constructor(snowmanDetails) {
    this.carrots = snowmanDetails.carrots;
    this.coal = snowmanDetails.coal;
    this.buttons = snowmanDetails.buttons;
    this.snowballs = snowmanDetails.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    this.magicHat = true;
    if(this.coal < 2) {
      this.magicHat = false;
    } else if (this.buttons < 5) {
      this.magicHat = false;
    } else if (this.carrots < 1) {
      this.magicHat = false;
    } else if (this.snowballs < 2) {
      this.magicHat = false;
    }
    }
  }



module.exports = Snowman;
