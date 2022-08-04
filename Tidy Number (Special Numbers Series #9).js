function tidyNumber(n){
  console.log(n)
  let nums=n.toString().split('')
  for (let i=1; i<nums.length; i++){
    if (nums[i-1]<=nums[i]){
      continue;
    }else {
      return false;
    }
  }
  return true
}

/*
P: positive integer
R: boolean true if each digit is larger than the previous
E: function(123) returns true
P:
for loop to check if each i is smaller than i+1 and continue if true, else false. return true at the end
*/