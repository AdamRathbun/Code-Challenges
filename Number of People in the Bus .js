var number = function(busStops){
  let count=busStops[0][0]
  for (let i=1; i<busStops.length; i++){
    count+=busStops[i][0]
    count-=busStops[i][1]
  }
  return count
}


/*
P: array of arrays of two nums, with the first being adding and second subtracting
R: remaining count after adding and subtracting
E: [ [ 10, 0 ], [ 3, 5 ], [ 5, 8 ] ] returns 5
P:
make a count and set it to busStops[0][0], for loop (start at 1), change count as needed, return count
*/