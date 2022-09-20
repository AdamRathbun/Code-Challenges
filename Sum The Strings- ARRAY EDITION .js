function sumArr(a,b) {
  const larger = a.length>b.length ? a : b
  let arr = []
  for (let i=0; i<larger.length; i++){
    const num1 = parseInt(a[i] || 0)
    const num2 = parseInt(b[i] || 0)
    const sum = String(num1+num2)
    arr.push(sum)
  }
  console.log(arr)
  return arr
}

/*
get two arrays of strings of nums, add them. if empty, assume 0
return new array of sums
*/