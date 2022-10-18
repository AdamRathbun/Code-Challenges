function squareArea(A){
  let r=4*A / (2*Math.PI)
  return Number(r*r===parseInt(r*r) ? r*r : (r*r).toFixed(2))
}

/*
circumference = 2 pi r 
r = c/ (2 * pi)=4A/(2*pi)
A=c/4 c=4A
*/

