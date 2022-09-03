function solution(string,limit){
    let arr=[]
    const str = string.split('')
    console.log(str)
    if (str.length<=limit){
      return string
    }else {
      for (let i=0; i<limit; i++){
        arr.push(str[i])
      }
    }
  console.log(arr)
  return arr.join('')+'...'
}

/*
string and a limit of characters
return truncated string if it's greater length than the limit
solution('Testing String', 8) --> 'Testing ...'
just split it, if length greater than limit, for loop push to array and concat ...

better solution:
function solution(string, limit){
  return string.length > limit ? string.slice(0, limit) + '...' : string;
}
*/