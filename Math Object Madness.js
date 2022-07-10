Math.ceil = function(x){
  if (x===parseInt(x)){  //note parseInt will extract number from string and round down 
    return x
  }else {
    return Math.trunc(x) + 1
  }
}

Math.floor = function(x){
  if (x===parseInt(x)){
    return x
  }else {
    return Math.trunc(x)
  }
}

Math.round = function (x) {
  if (x===parseInt(x)){
    return x
  }else {
    return x.toString().split('.')[1][0]>=5? Math.ceil(x) : Math.trunc(x)
  }
}
  
Math.abs = function(x){
  if (x===0){
    return 0
  }else if (x<0){
    return x*(-1)
  }else {
    return x
  }
}

Math.max = function () {
  let x=arguments[0]
  for (let i=0; i<arguments.length; i++){
    if (x>arguments[i]){
      x=x;
    }else {
      x=arguments[i]
    }
  }
  return x
}


Math.min = function () {
  let x=arguments[0]
  for (let i=0; i<arguments.length; i++){
    if (x>arguments[i]){
      x=arguments[i]
    }
  }
  return x
}

Math.pow=function(x,y){
  return x**y
}