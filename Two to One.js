function longest(s1, s2) {
  const string=s1.concat(s2)
  let str=[...new Set(string)]
  return str.sort().join('')
}

/*
P: two strings
R: sorted unique string of both strings combined
E: "aretheyhere" "yestheyarehere" returns "aehrsty"
P: add both strings, use Set constructor with an array, sort it, join
<<<<<<< HEAD
*/
=======
*/
>>>>>>> 3331c5a2bba986129dd73dc73d7ee0a36067267c
