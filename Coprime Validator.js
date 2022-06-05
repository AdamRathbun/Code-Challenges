function isCoprime(x,y) {
  for (let i=2; i<=99; i++){
    if (x%i==0 && y%i==0){
      console.log(i)
      return false;
    }else if (i===99){
      return true;
    }
  }
}


/*
P: two nums
R: true or false boolean with false meaning not coprimes
E: function(12,39) returns false because they shared common denominator 3
P:
ok my first attempt did not work below:
return (y===0 ? x : isCoprime(y, x%y)) === 1 ? true : false;
return y===0 ? x : isCoprime(y, x%y)
return z === 1 ? true : false;
*/