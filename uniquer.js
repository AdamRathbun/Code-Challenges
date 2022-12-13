// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function uniquer(array){
    const uniques = new Set(array)
    const uniqueArray = Array.from(uniques)
    if (uniqueArray.length===array.length){
        return false
    }else {
        return true
    }
}

function uniquer2(array){
    let numsMap = {}
    for (let i=0; i<array.length; i++){
        let num =arr[i]
        if (numsMap[num]){
            return true
        }else {
            numsMap[num] = true
        }
    }
    return false
}
// the hash map is faster due to immediate termination at correct value, so better for large data sizes