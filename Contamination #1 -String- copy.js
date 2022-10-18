function contamination(text, char){
    if(!text || !char){
      return ''
    }
    let newT=text.split('')
    for (let i=0; i<text.length; i++){
      newT[i]=char
    }
    console.log(newT.join(''))
    return newT.join('')
  }