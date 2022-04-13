function swap(str){
    let splitWord=str.split('')
    for (let i=0; i<splitWord.length; i++){
      if (splitWord[i] !== splitWord[i].toLowerCase()){
          splitWord[i] = splitWord[i].toLowerCase()
      }else if (splitWord[i] !== splitWord[i].toUpperCase()){
          splitWord[i] = splitWord[i].toUpperCase()
      }
    }
    return splitWord.join('')
  }