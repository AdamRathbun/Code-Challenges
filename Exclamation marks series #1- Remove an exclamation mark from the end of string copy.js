function remove (string) {
    let me=string.split('')
    console.log(me)
    if (me[me.length-1]==='!'){
      me.pop()
    }
    console.log(me.join(''))
    return me.join('')
  }