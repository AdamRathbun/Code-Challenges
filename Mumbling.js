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
<<<<<<< HEAD
*/
=======
*/
>>>>>>> 3331c5a2bba986129dd73dc73d7ee0a36067267c
