function toNumberArray(stringarray){
    stringarray.join(',')
    console.log(stringarray)
    return stringarray.map(x=>parseFloat(x))
  }
  
  
  /*
  function toNumberArray(stringarray){
    stringarray.join(',')
    console.log(stringarray)
    for (let i=0; i<stringarray.length; i++){
      stringarray[i]=parseFloat(stringarray[i])
    }
    return stringarray
  }
  */
