function toFreud(string) {
  if (string===''){
    return ''
  }
  string=string.split(' ')
  return string.map(x=> 'sex').join(' ')
}

/*
P: string
R: string with every word replaced with 'sex'
E: funciton('I eat bananas') returns 'sex sex sex'
P:
split(' ')
map(x=>'sex')
*/