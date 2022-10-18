function saleHotdogs(n){
    if (n>=10){
      return n*90
    }else if (n>=5 && n<10) {
      return n*95
    } else {
      return n*100
    }
  }

  /*
  function saleHotdogs(n){
  return n*(n<5? 100 : n<10? 95 : 90)
}
*/