function solution(a, b){
    let aL=a.split('').length
    let bL=b.split('').length
    if (bL<aL){
      let str=`${b+a+b}`
      return str
    }else {
      let str=`${a+b+a}`
      return str
    }
  }