// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorElement = function (array) {
    let hashMap = {}
    array.forEach( element => {
        hashMap[element] = (hashMap[element] || 0 ) +1
    })
    for (let key in hashMap){
        if (hashMap[key]>(array.length/2)){
            return Number(key)
        }
    }
}

const majorElement2 = function (array) {
    let hashMap = {}
    let count = 0
    let finalElement =''
    array.forEach( element => {
        hashMap[element] = (hashMap[element] +1 || 1 )
    })
    for (let key in hashMap){
        if (hashMap[key]>count){
            count = hashMap[key]
            finalElement = key
        }
    }
    return Number(finalElement)
}

const majorElement3 = function (array) {
    let hashMap = {}
    for (const num of array){
        if (hashMap[num] > array.length){
            return num
        }else {
            hashMap[num] = hashMap[num] + 1 || 1
        }
    }
}

const majorElement4 = function (array) {
    const sorted = array.sort((a,b)=> a-b)
    return array[Math.ceil(array.length/2)]
}


