function alexMistakes(numberOfKata, timeLimit){
  let timeToDo=6*numberOfKata
  console.log(numberOfKata, timeLimit, timeToDo)
  timeLimit-=timeToDo
  let mistake = 5
  let times = 0
  while (timeLimit > mistake) {
    times++
    timeLimit-=mistake
    mistake*=2
  }
    return times
}

/*
can do 10 kata per hour (6 min each)
two parameters: number of katas to do, and time limit
each time the timeout doubles
how many mistakes can he make?
*/