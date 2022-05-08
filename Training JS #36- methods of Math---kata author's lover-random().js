function rndCode(){
    let initialL="ABCDEFGHIJKLM"
    let randomAM=initialL[~~(initialL.length*Math.random())]
    let syms='~!@#$%^&*'
    let randomSym=syms[~~(syms.length*Math.random())]
    let code=''
      for (let i=0; i<2; i++){
        code=code.concat(randomAM)
      }
      for (let i=0; i<4; i++){
        code=code.concat(Math.floor(Math.random()*10))
      }
      for (let i=0; i<2; i++){
        code=code.concat(randomSym)
      }
    console.log(code)
    return code
  }