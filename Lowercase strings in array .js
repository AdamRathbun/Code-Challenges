function arrayLowerCase(arr) {
  let array = arr.slice()
  for (let i=0; i<array.length; i++){
    if (typeof array[i] === 'string'){
      array[i]=array[i].toLowerCase()
    }
  }
  return array
}

/*
turn strings of arr into lowercase
*/