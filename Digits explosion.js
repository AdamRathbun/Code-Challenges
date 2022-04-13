function explode(s) {
    s=s.split('') 
    let array=[]
    for (let i=0; i<s.length; i++)
      array.push(s[i].repeat(s[i]))
    return array.join('')
  }