function gimme (triplet) {
    return triplet.indexOf(triplet.concat().sort((a,b)=>a-b)[1])
  }
  
  /*
  sort array with sort((a,b)=>a-b) to create lowest to highest
  grab index(1)
  function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  } */