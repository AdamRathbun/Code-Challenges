function nextPal(val) {
  val=val+1
  let num =0
  while (!num){
    if ( Number(val.toString().split('').reverse('').join('')) === val ){
      return val
    }else {
      val=val+1
    }
  }
}