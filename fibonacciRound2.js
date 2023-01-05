// let arr = [0,1]
// function fibonacci2(num){
//     for (let i=2; i<=num; i++){
//         arr[i] = arr[i-1] + arr[i-2]
//     }
//     return arr[num]
// }

function fibonacci3(num){
    if (num<2){
        return num
    }else {
        return (fibonacci3(num-1) + fibonacci3(num-2))
    }
}

// memoization: an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that info from the cache the next time it's needed instead of computing it again.
let memo = {}
const fib = function(n){
    if (n <= 1){
        return n
        // time complexity = O(1)( memo2[n]!==null ){
    }else if (memo[n]){
        return memo[n]
        // time complexity = O(1)
    }else {
        let result = fib(n-1) + fib(n-2)
        memo[n] = result
        return result
        // time complexity = O(2n+1)
    }
}

// note the time complexity of memoization is rounded to O(n)


// bottom up approach:
let arr = [0,1]
const fibBottomUp = function(num){
    for (let i=2; i<=num; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[num]
}
// time complexity is O(n)