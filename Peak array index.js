function peak(arr){
    for (let i=0; i<arr.length; i++){
      if (arr.slice(0,i).reduce((a,b)=>a+b,0)===
          arr.slice(i+1).reduce((a,b)=>a+b,0)){
        return i
      }
    }
    return -1
  }
  /*
  P: array of nums
  R: index number or -1 for no valid 
  E: function([1,2,3,5,3,2,1]) return 3
  P:
  for loop
  conditional with slice and reduce?
  */