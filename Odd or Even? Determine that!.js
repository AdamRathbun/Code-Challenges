function oddOrEven(n) {
    console.log(n)
    if (n%2!==0){
      return EITHER
    }else if (n===0 || n%4===0){
      return EVEN
    }else {
      return ODD
    }
  }