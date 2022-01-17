// return masked string
function maskify(cc) {
    cc=cc.split('')
    if (cc.length>4){
      for (let i=0; i<cc.length-4; i++){
        cc[i]='#'
      }
    }else {
      return cc.join('')
    }
    return cc.join('')
  }