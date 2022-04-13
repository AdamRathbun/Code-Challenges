function searchNames( logins ){
    return logins.filter(x=>x[0].endsWith('_'))
  }
  
  /*
  P: array of arrays with strings
  R: array of array(s) with strings with underscore
  E: function([['dfdf_','pop'],['oop','www']]) returns ['dfdf_','pop']
  P:
  filter
  
  */