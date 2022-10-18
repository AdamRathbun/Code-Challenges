function howMuchILoveYou(nbPetals) {
  let counter=nbPetals
  if (counter>6){
    counter=(counter%6===0 ? 6 : counter%6)
  }
  console.log(counter)
  if (counter===1){
    return 'I love you'
  }else if (counter===2){
    return 'a little'
  }else if (counter===3){
    return 'a lot'
  }else if (counter===4){
    return 'passionately'
  }else if (counter===5){
    return 'madly'
  }else if (counter===6){
    return 'not at all'
  }
}

/*
P: num
R: string
E: function(2) returns 'a little'
P:
make a counter with modulus % and add ternary for the 6th petal
*/