function findSum(){
    let args = Array.from(arguments)
    let sum=0
    if (arguments.length===0){
      return 0
    }
    for (let i=0; i<args.length; i++){
      if (args[i]<0) {
        return -1
      }else {
        sum+=args[i]
      }
    }
    console.log(sum)
    return sum
  }