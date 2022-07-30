function getMiddle(s){

  if (s.length<3){
    return s
  }else if (s.length%2===0){
    return s[(s.length/2)-1] + s[(s.length/2)]
  }else if (s.length%2!==0){
    return s[(s.length-1)/2]
  }
}

/*
P: string
R: middle character if odd, middle two characters if even
E: Kata.getMiddle("test") should return "es"
P:
if odd: s[(s.length-1)/2]
if even: s[(s.length/2)-1] + s[(s.length/2)]
*/