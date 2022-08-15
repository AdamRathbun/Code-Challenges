function accum(s) {
  let arr=s.toLowerCase().split('')
  let str=s[0].toUpperCase()
  for (let i=1; i<arr.length; i++){
    str=str+'-'+arr[i].toUpperCase()+arr[i].repeat(i)
  }
  console.log(str)
  return str
}

/*
P: string
R: string with a dash and then each letter repeating as many times as its index
E: accum("cwAt") -> "C-Ww-Aaa-Tttt"
P:
split
for loop
*/