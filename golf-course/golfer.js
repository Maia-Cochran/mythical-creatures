class Golfer {
  constructor(golferInfo){
    this.name = golferInfo.name;
    this.handicap = golferInfo.handicap;
    this.frustration = 0;
    this.confidence = 0;
    // this.shot = numberOfShots;
  }
  calculateAvg(par1){
    var average = par1 + this.handicap
    return `I usually shoot a ${average} on average.`
  }
  playRound(golfer){
    if(golfer.difficulty === 'hard'){
      this.frustration += 500
    } else if(golfer.difficulty === 'moderate'){
      this.frustration += 100
    }
  }
  hitTheRange(){
    this.confidence += 10
  }
  marvel(courseInfo){
    return `I love the ${courseInfo.features[0]} and ${courseInfo.features[1]} on this course!`
  }
  whatYaShoot(score){
    console.log()
      if(score === 0){
        this.frustration -= 10
      return `Booyah!`
    } else if (score > 0){
        this.frustration += 20
      return `Doh!`
    } else {
      this.frustration = 0;
      return `I AM THE GREATEST GOLFER ALIVE!`
    }
  }
}

module.exports = Golfer;
