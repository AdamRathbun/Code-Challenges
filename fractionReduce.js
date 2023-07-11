function reduce(fraction){
    //   greatest common denominator 
      let gcd = (a,b) => {
        if (b===0){
          return a
        }else{
          return gcd(b, a%b)
        }
      }
      let divisor = gcd(fraction[0], fraction[1])
      return [fraction[0]/divisor, fraction[1]/divisor]
    }
    
    // given an array fraction of [a,b], reduce it to the simplest form and return that array
    // not a reduce() method problem, more like it wants to find the common divisor
    // 