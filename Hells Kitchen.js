function gordon(a){
  console.log(a)
  let arr=a.split(' ')
  for (let i=0; i<arr.length; i++){
    arr[i]=arr[i].toUpperCase().replace(/[A]/g, '@').replace(/[EIOU]/g, '*').concat('!!!!')
  }
  console.log(arr.join(' '))
  return arr.join(' ')
}

/*
P: string
R: string with a/A replaced with @ and other vowels with *, as well as !!!! after each word
E: 'What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
P:
split
for loop + regex
join
*/