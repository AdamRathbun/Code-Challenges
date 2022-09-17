Array.prototype.reverse = function() {
  const arg = this.splice(0)
  while (arg.length){
    this.push(arg.pop())
  }
  return this
};


/*
build the reverse method
important thing is that the original array must be altered
this.splice(0) to get the original array without a parameters
while loop -> while arg.length, this.push(arg.pop())
*/