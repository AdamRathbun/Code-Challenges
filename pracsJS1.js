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

// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
async function sleep(millis) {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        }, millis)
    })
    return promise
}

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1. 
// b.c it's the Array object, use this
Array.prototype.last = function(arr) {
    return this.length>1 ? this[this.length-1] : -1
};

// parameters ia n, an integer, and d, a digit integer, square all numbers from 1 to n, then check each time d comes up in these numbers
function nbDig(n, d) {
      let count=0
      for (let i=0; i<=n; i++){
        const square = i*i
        const digits = square.toString().split('')
        count+= digits.filter(item=>item===d.toString()).length
      }
      return count
    }

// check every hand to make sure you have a flush, with parameter as an array of strings representing cards
function isFlush(cards) {
    return cards.every(card=>cards[0].slice(-1)===card.slice(-1))
  }