function getHex(color){
    let hex=color.toString(16)
    return hex.length===1 ? '0' + hex : hex
  }
  
  function colorOf(r,g,b){
    return '#' + getHex(r) + getHex(g) + getHex(b)
  }