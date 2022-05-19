function isAllPossibilities(x){
    return !x.length>0 ? false : x.every((a,i)=>x.includes(i)) ? true : false
  }
  
  /*
  P: array of nums
  R: boolean
  E: function([1,2,0,3]) returns true
  P:
  for loop
  conditional
  */