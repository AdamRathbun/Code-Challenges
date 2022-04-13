function XO(str) {
    str=str.toLowerCase()
    let xCount=str.split('x').length
    let oCount=str.split('o').length
    if (xCount===oCount){
      return true
    }else {
      return false
    }
}