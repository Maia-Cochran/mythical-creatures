class Runner {
  constructor(runnerName, runnerAge){
    this.name = runnerName;
    this.age = runnerAge;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(numberOfMiles){
    this.milesRun += numberOfMiles;
    this.fitness += numberOfMiles;
    return numberOfMiles
  }
  stretch(){
    this.fitness += .5
  }
  runRace(raceCompleted, numberOfMiles){
    this.completedRaces.push(raceCompleted);
    this.runSomeMiles(numberOfMiles);
  }
}

module.exports = Runner;
