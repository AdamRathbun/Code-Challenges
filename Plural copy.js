function plural(n) {
    if (n<1 && n>0){
      return true
    }else if (n>1) {
      return true
    }else if (n===1){
      return false
    }else if (n===0){
      return true
    }
  }