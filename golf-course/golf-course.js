class GolfCourse {
  constructor(courseInfo, difficulty, openings, featureList){
    this.name = courseInfo;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = featureList;
    this.currentlyPlaying = [];
  }
  checkInGroup(group){
    if(this.openings > 1){
      for(var i = 0; i < group.length; i++){
        this.currentlyPlaying.unshift(group[i].name)
        this.openings -= 1;
      }
      return `You're checked in. Have fun!`
    } else {
      return `Sorry, we are currently booked! Please come back later.`
      }
    }
  }


module.exports = GolfCourse;
