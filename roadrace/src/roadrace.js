var Runner = require("../src/runner.js");

class Roadrace {
  constructor(roadraceInfo){
    this.name = roadraceInfo.title;
    this.location = roadraceInfo.city;
    this.distance = roadraceInfo.setDistance;
    this.participants = [];
  }
  setDistance(distanceInMiles){
    this.distance = distanceInMiles
    return `The ${this.name} in ${this.location} is a ${distanceInMiles} mile race.`
  }
  registerParticipants(roadraceInfo){
    this.participants.push(roadraceInfo)
  }
  completeRace(){
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].completedRaces.push(this.name);
      this.participants[i].milesRun = this.distance;

    }
  }
}
module.exports = Roadrace;
