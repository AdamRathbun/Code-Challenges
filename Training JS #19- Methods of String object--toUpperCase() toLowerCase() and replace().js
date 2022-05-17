function alienLanguage(str){
    return str.split(' ').map(x=>x.slice(0,-1).toUpperCase()+x.slice(-1).toLowerCase()).join(' ')
  }
  /*
  P: string
  R: string but last character is lower case while all others upper case
  E: 'My name is John' returns 'My NAMe Is JOHn'
  p:
  conditionals and to up/lower
  */