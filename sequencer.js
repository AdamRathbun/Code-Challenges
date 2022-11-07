// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

function sequencer(arr, mix){
    // get an array of that's 1 to N and another array that's 1 to N but missing a number, return the missing number, or else 0
    if (!arr) return 0 
    mix=mix.sort((a,b)=>a-b)
    for (let i=1; i<=arr[arr.length-1]; i++){
        if (mix[i] !== arr[i] ){
            return arr[i]
        }
    }
    return 0
}

function sequencer2(arr){
    // get an array of that's 1 to N but potentially missing a number, return the missing number, or else 0
    if (!arr) return 0 
    arr=arr.sort((a,b)=>a-b)
    for (let i=1; i<=arr[arr.length-1]; i++){
        if (arr[i] !== (arr[i+1] - 1) ){
            return arr[i] + 1
        }
    }
    return 0
}