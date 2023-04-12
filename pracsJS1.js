// pracs with JS

// greatest common denom
function commonDenom(x,y){
    if (x===y){
        return x
    }else{
        const small = x<y ? x : y
        const big = y<x ? x : y
        for (let i=small; i>=1; i--){
            if (small%i===0 && big%i===0){
                return i
            }
        }
    }
}

// fibonacci - memoization - fib(num)=fib(num-1) + fib(num-2)
let memo={}
function fib(num){
    if (num<2){
        return num
    }else if (memo[num]){
        return memo[num]
    }else {
        const value = fib(num-1)+fib(num-2)
        memo[num]=value
        return value
    }
}

// two-sum - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
function twoSum(array, integer){
    let storage = {}
    for (let i=0; i<array.length; i++){
        const remainder = integer - array[i]
        if (remainder in storage){
           return [storage[remainder], i]
        }else {
            storage[array[i]]=i
        }
    }
    return -1
}

// addElipsis function - taking in a string and a max length, reduce any excess to an elipsis (... means 3 characters counted for length)
function addElipsis(string, length){
    if (length<3){
        throw new Error('Cannot do less than 3')
    }else if (string.length<length){
        return string
    }

    return string.split('').slice(0, length-3).join('').concat('...')
}

// palindrome
function palindrome(word){
    const reversed = word.split('').reverse().join('')
    if (word===reversed){
        return true
    }else {
        return false
    }
}
// marginally more efficient palindrome
function palindrome2(word){
    let start = 0
    let end = word.length-1
    while (start<end){
        if (word[start]!==word[end]){
            return false
        }
        start++
        end--
    }
    return true
}
