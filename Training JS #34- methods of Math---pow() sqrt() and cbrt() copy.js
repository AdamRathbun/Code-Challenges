function cutCube(volume,n){
    let myN=Number.isInteger(Math.cbrt(n))
    let myB=Number.isInteger(Math.cbrt(volume/n))
    if (myN==true && myB==true){
      console.log('yep')
      return true
    }else {
      console.log('nope')
      return false
    }
  }