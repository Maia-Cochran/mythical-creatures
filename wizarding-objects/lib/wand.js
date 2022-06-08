class Wand {
  constructor(wandType, wandSize, wandCore){
    this.type = wandType;
    this.size = wandSize;
    this.core = wandCore;
  }
  cast(spell){
    return `Casting ${spell}!`
  }
}
module.exports = Wand;

// console.log(spell)
//   if(spell === 'Accio'){
//   return 'Casting Accio!'
// } else {
//   return 'Casting Wingardium Leviosa!'
// }
