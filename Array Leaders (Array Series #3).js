function arrayLeaders(numbers){
  console.log(numbers)
  let arr=[]
  for (let i=0; i<numbers.length-1; i++){
    let right=0
    for (let j=i+1; j<numbers.length; j++){
      right+=numbers[j]
    }
    if (numbers[i]>right){
      arr.push(numbers[i])
    }
  }
  if (numbers[numbers.length-1]>0){
      arr.push(numbers[numbers.length-1])
    }
  return arr;
}

/*
P: array of numbers
R: element leaders in the form of an array
E: (arrayLeaders([1,2,3,4,0]), [4]);
P:
for loop inside for loop?
*/