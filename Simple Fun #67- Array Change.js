function arrayChange(arr) {
  console.log(arr)
  let count = 0
  for (let i=1; i<=arr.length; i++){
    if (arr[i]<arr[i-1]){
      const num = arr[i-1] - arr[i] + 1
      count+=num
      arr[i]=arr[i]+num
    }else if (arr[i] === arr[i-1]){
      count++
      arr[i]++
    }else{
      continue
    }
  }
  return count
}

/*
if i can only increase by 1 at a time, how many moves does it take to change an array parameter 
so that each element is naturally sorted in an increasing manner
*/