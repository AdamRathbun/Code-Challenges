function digitize(number){
    number=number.toString().split('').reverse()
    for (let i=0; i<number.length; i++){
      number[i]=Number(number[i])
    }
    return number
  }