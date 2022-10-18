function remainder(n, m){
    if (n>m) {
      return n%m
    }else if (m>n) {
      return m%n
    }else if (m=n) {
      return m%n
    } else if (n===0 || m===0) {
      return NaN
    }
  }