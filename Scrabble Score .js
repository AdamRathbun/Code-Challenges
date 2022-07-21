function scrabbleScore(str){
  if (str===''){return 0}
  let count=0
  const myStr=str.toLowerCase().split('')
  for (let i=0; i<myStr.length; i++){
    if (myStr[i]==='a' || myStr[i]==='e' ||myStr[i]==='i' ||myStr[i]==='o' ||myStr[i]==='u' ||myStr[i]==='l' ||myStr[i]==='n' ||myStr[i]==='r' ||myStr[i]==='s' ||myStr[i]==='t'){
      count+=1
    }else if (myStr[i]==='d' ||myStr[i]==='g'){
      count+=2
    }else if (myStr[i]==='b' ||myStr[i]==='c' ||myStr[i]==='m' ||myStr[i]==='p'){
      count+=3
    }else if (myStr[i]==='f' ||myStr[i]==='h' ||myStr[i]==='v' ||myStr[i]==='w' ||myStr[i]==='y'){
      count+=4
    }else if (myStr[i]==='k'){
      count+=5
    }else if (myStr[i]==='j' ||myStr[i]==='x'){
      count+=8
    }else if (myStr[i]==='q' ||myStr[i]==='z'){
      count+=10
    }else {
      continue
    }
  } 
  return count
}


/*
P: string of a word that may come with spaces
R: scabble score based on the letters
E: "cabbage" --> 14
P:
return 0 for empty string
split('') then for loop, then if conditional for the count
*/