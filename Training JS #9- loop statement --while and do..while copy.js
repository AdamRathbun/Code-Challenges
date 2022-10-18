function padIt(str,n){
    let count=0
    while (count<=n){
      if (count%2!==0){
        str='*' + str
      } else if (count>0 && count%2===0){
        str=str+'*'
      }
      count++
    }
    console.log(str)
    return str
  }