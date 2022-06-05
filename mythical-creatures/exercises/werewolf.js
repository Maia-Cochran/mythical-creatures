class Werewolf {
  constructor(name){
    this.name = name;
    this.form = 'human';
    this.hungry = false;
  }
  completeTransformation(){
    if(this.form === 'human'){
      this.hungry = true;
      this.form = 'wolf';
      return 'Aaa-Woooo!';
    } else if (this.form === 'wolf'){
      this.form = 'human';
      this.hungry = false;
      return 'Where are I?';
    }
  }
  eatVictim(victim){
    if(this.form === 'human'){
      victim.alive = true;
      return `No way am I eating Baby, I'd like a burger!`
    } else if(this.form === 'wolf'){
    victim.alive = false;
    this.form = 'human';
    return `Yum, Hannah was delicious.`;
    }
  }
}
module.exports = Werewolf;
