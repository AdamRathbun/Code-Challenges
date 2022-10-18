function nameShuffler(str){
    str=str.split(' ')
    let lastName=str[1]
    let firstName=str[0]
    let v1=str.splice(0,2,lastName,firstName)
    return str.join(' ')
  }