function roundIt(n){
    let newN=n.toString()
    let length=newN.length
    console.log(newN)
    console.log(length)
    let decimal=newN.indexOf('.')
    console.log(decimal)
    if (Number(length-decimal)-1>decimal){
      return Math.ceil(n)
    }else if (Number(length-decimal)-1<decimal){
      return Math.floor(n)
    }else if (Number(length-decimal)-1===decimal){
      return Math.round(n)
    }
  }