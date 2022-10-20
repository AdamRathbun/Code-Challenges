function sum() {
  let nums = Array.from(arguments)
  return nums.length>=2 ? nums.reduce((a,b)=>a+b) : nums[0]
}

/*
sum function for an arbitrary number of arguments
use arguments object (which is array like but not an array), so Array.from(arguments)
return with reduce method or first index if just one element
*/