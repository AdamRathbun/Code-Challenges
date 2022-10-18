function getNumberFromString(s) {
    console.log(Number(s.match(/\d+/g).join('')))
    return Number(s.match(/\d+/g).join(''))
  }
  
  /*
    console.log(Number(newS.filter(x=>Number.isInteger(Number(x))).join('')))
    return Number(newS.filter(x=>Number.isInteger(Number(x))).join(''))
  */