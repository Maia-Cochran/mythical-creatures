class Spell {
  constructor(name, description, targets, target1, target2, target3){
    this.name = name;
    this.description = description;
    this.executionHistory = [];
    // this.targets = [target1, target2, target3]
  }
  execute(targets){
    for(var i= 0; i < targets.length; i++){
        this.executionHistory.push(targets[i])
        }
    if(Array.isArray(targets))
      return `Success! You've cast a spell on the ${targets[0]}. Success! You've cast a spell on the ${targets[1]}. Success! You've cast a spell on the ${targets[2]}.`
      // console.log(targets[i])
    // }
  return `Success! You've cast a spell on the ${targets}.`
  }
  clearExecutionHistory(){
    this.executionHistory.length = 0;
  }
}

module.exports = Spell;
