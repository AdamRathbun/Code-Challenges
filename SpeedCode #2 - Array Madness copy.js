function arrayMadness(a, b) {
    let aSum=0
    let bSum=0
    for (let i=0; i<a.length; i++){
      aSum+=a[i]**2
    }
    for (let i=0; i<b.length; i++){
      bSum+=b[i]**3
    }
    if (aSum>bSum){
      return true
    }else {
      return false
    }
  }