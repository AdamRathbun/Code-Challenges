// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

const jeweler = function (jewels, stones) {
    let check = jewels.split('')
    let bag = stones.split('')
    let count = 0
    for (let i=0; i<bag.length; i++){
        if (check.includes(bag[i])){
            count++
        }
    }
    return count
}

function jeweler2 (jewels, stones){
    let map = {}
    let count = 0
    for (let jewel of jewels){
        // my map will have the value of true for each value of jewels, which will be "a" and "A", so "a"=true and "A"=true
        map[jewel]=true
    }

    for (let stone of stones){
        if (map[stone]){
            count++
        }
    }
    return count
}

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// console.log(jeweler2("aA", "aAAbbbb")) should return 3