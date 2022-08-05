function switcheroo(x){
  let y=x.split('')
  for (let i=0; i<y.length; i++){
    if (y[i]==='a'){
      y[i]='b'
    }else if (y[i]==='b'){
      y[i]='a'
    }
  }
  return y.join('')
}