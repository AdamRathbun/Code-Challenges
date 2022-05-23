function mergeArrays(a, b) {
    console.log(a,b)
    let arr=[]
    let c=Math.max(a.length,b.length)
    for (let i=0; i<c; i++){
      arr.push(a[i])
      arr.push(b[i])
    }
    console.log(arr)
    return arr.filter(x=>x!==undefined)
  }
  /*
  P: two arrays
  R: combined array
  E: function([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'] returns [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
  P:
  for loop and conditional
  */