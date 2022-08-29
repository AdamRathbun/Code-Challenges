function makeString(s){
  const arr = s.split(' ')
  let array = []
  for (let i=0; i<arr.length; i++){
    array.push(arr[i][0])
  }
  return array.join('')
}

/*
pull initial of each word. 
"This Is A Test" ==> "TIAT"
split(' '), for loop, log first index, join('') at the end
*/