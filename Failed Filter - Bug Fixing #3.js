var FilterNumbers = function(str) {
    return str.split('').filter(c => (!parseInt(c))&&parseInt(c)!==0).join('');
  }
  
  
  /*
  P: string
  R: string with only strings and no nums
  E: function('2d22s') returns 'ds'
  P:
  just need to add filter for 0
  */