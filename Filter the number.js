var FilterString = function(value) {
    let sum=''
    value=value.split('')
    for (let i=0; i<value.length; i++){
      if (Number(value[i]) || Number(value[i])===0){
        sum=sum+value[i]
      }
    }
    console.log(sum)
    return Number(sum)
  }
  /*
  P: string of nums and strings
  R: one number with all nums concatenated
  E: function(['234s1']) returns 2341  note it's concatenated, not added like numbers
  P
  declare sum=''
  split it
  for loop
  if typeof Number(i) === 'number', add to sum
  return Number(sum)
  */