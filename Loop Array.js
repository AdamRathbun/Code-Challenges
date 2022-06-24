function loopArr(arr, direction, steps) {
  if (direction==='left'){
    for (let i=1; i<=steps; i++){
      arr.push(arr.shift())
    }
  }
  if (direction==='right'){
    for (let i=1; i<=steps; i++){
      arr.unshift(arr.pop())
    }
  }
  return arr
}

/*
P: array, direction of looping, number of elements looped
R: mutated array
E: loopArr([1, 5, 87, 45, 8, 8], 'left', 2) returns [87, 45, 8, 8, 1, 5]
P:
if conditional into for loop of push/pop and unshift/shift
*/