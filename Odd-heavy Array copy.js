function isOddHeavy(n){
  let odd=[]
  let even=[]
  console.log(n)
  for (let i=0; i<n.length; i++){
    if (n[i]%2===0){
      even.push(n[i])
    }else {
      odd.push(n[i])
    }
  }
  odd.sort((a,b)=>a-b)
  even.sort((a,b)=>b-a)
  if (n.length===1 && n[0]%2!==0){
    return true
  } else if (odd.length===0){
    return false
  }else if (odd.length>=0 && even.length===0){
    return true
  }  else if (odd[0]>even[0]){
    return true
  }else {
    return false
  }
}


/*
P: array
R: boolean of if array is odd-heavy (at least one odd num and lowest odd>highest even)
E: [11,4,9,2,8] is odd-heavy 
P:
for loop and put each odd into one array and each even into another array
sort odd array and even array and check for odd-heavy
special note: empty arrays are truthy b.c it's just an object. need to check array.length
*/