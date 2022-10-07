function tea42(input) {
  let word = String(input)
  if (input==='2'){
    return 't'
  }else {
    return word.split('').map(x=>x==='2' ? 't' : x).join('')
  }
};

/*
switch every 2 for a 't'
*/