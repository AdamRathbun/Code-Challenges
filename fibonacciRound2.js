function fibonacci2(num){
    let arr = [0,1]
    for (let i=2; i<=num; i++){
        arr[i] = arr[i-1] + arr[i+2]
    }
    return arr[num]
}

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
    if (n === 1 || n === 0){
        return n
    }else if (memo[n]){
        return memo[n]
    }else {
        let result = fib(n-1) + fib(n-2)
        memo[n] = result
        return result
    }
}


// slightly refactored:
let memo2 = []
const fib2 = function (n, memo2){
    if ( memo2[n]!==null ){
        return memo[n]
        // time complexity = O(1)
    }else if (n ===1 || n===2){
        return n
        // time complexity = O(1)
    }else {
        result = fib2[n-1] + fib2[n-2]
        memo2[n] = result
        return result
        // time complexity = O(2n+1)
    }
}

// note the time complexity of memoization is rounded to O(n)