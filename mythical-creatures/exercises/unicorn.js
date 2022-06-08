class Unicorn{
  constructor(name, color){
    this.name = name;
    this.color = color || 'white';
  }
  isWhite(){
    return false;
  }
  says(stuff){
    return `**;* ${stuff} *;**`
  }
}

module.exports = Unicorn;

// class Unicorn {
//   constructor(name, color) {
//     this.name = name;
//     if (color === undefined) {
//       this.color = 'white';
//     } else {
//       this.color = color;
//     }
//   }
//
//
// isWhite() {
//   if (this.color !== 'white') {
//     return false;
//     }
// };
//
// says(words) {
//   return `**;* ${ words } *;**`
//   }
// };
//
//
// module.exports = Unicorn;
