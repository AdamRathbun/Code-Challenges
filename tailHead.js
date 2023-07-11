function tailAndHead(arr){
    let product=1;
    arr.reduce((a,c)=>{
    // turn each to string to access length
      a1=a.toString()
      c1=c.toString()
      product*=(Number(a1[a1.length-1]) + Number(c1[0]))
      return c
    })
    return product
  }
  
// given an array, take the last digit of each item and the first digit of the next item, add them, then multiply each one
// return the end product, must use reduce()
  