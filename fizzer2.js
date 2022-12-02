// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(num){
    let list = []
    for (let i=1; i<=num; i++){
        if (i%2===0 && i%3===0){
            list.push('Fizz Buzz')
        }else if (i%2===0){
            list.push('Fizz')
        }else if (i%3===0){
            list.push('Buzz')
        }else {
            list.push(i)
        }
    }
    return list
}

// take in a num, has to be an integer. Print out all integers from 1 to that number. if it is divisible by 2&3, print "Fizz Buzz".
// if divisible by just 2, print "Fizz". if divisible by just 3, print "Buzz"
// my solution is linear time O(n)