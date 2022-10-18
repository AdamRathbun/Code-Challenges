function stringy(size) {
    let string=''
    for (let i=1; i<=size; i++){
      if (i%2!==0){
        string=string+'1'
        console.log(string)
      }else if (i%2===0){
        string=string+'0'
        console.log(string)
      }
    }
    console.log(string)
    return string
  }