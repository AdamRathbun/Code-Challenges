function vaporcode(string) {
  const str0=string.replace(/\s/g, "")
  const str1=str0.toUpperCase().split('')
  return str1.join('  ')
}

/*
P: string
R: string with spaces taken out, then every character joined by two spaces
E: "Lets go to the movies" -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
P: regex string.replace(/\s/g,''), split(''), then join('  ')
*/