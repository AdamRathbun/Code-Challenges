function shuffleIt(arr,...x){
    for ([a,b] of x){
      [arr[a],arr[b]]=[arr[b],arr[a]]
    }
    return arr
  }
