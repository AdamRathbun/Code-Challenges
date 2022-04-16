function vowelIndices(word){
    word=word.toLowerCase().split('')
    let myList=[]
    const myRegex=/(a|e|i|o|u|y)/
    for (let i=0; i<word.length; i++){
      if (word[i].match(myRegex)){
        myList.push(i+1)
      }
    }
    return myList
  }