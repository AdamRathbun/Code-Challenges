function whatNumberIsIt(n){
    if (isNaN(n)){
      return 'Input number is Number.NaN'
    }
    if (n==1/0){
      return `Input number is Number.POSITIVE_INFINITY`
    }
    if (n==1.7976931348623157e+308){
      return `Input number is Number.MAX_VALUE`
    }
    if (n==5e-324){
      return `Input number is Number.MIN_VALUE`
    }
    if (n==-Number.MAX_VALUE*2){
      return `Input number is Number.NEGATIVE_INFINITY`
    }
    if (n==Infinity+1){
      return `Input number is Number.POSITIVE_INFINITY`
    }
    if (n===Number(n)){
    return `Input number is ${n}`
    }
  }