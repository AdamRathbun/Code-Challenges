// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

function sortTheOdd(array){
    let arr=[]
    let count=0
    for (let i =0; i<array.length; i++){
        if (array[i]%2===1){
            arr.push(array[i])
        }
    }
    arr=arr.sort((a,b)=>a-b)
    for (let i=0; i<array.length; i++){
        if (array[i]%2!==0){
            console.log(arr[count])
            array[i]=arr[count]
            count+=1
        }
    }
    return array
}

function sortTheOdd2(array){
    const odds = array.filter(x=> x%2!==0).sort((a,b)=>a-b)
    return array.map(x=> x%2=== 0 ? x : odds.shift())
}

function sortTheOdd3(array){
    // 1 is automatically truthy
    const odds = array.filter(x=> x%2).sort((a,b)=>b-a)
    // shift is O(n) but pop() is O(1)
    return array.map(x=> x%2=== 0 ? x : odds.pop())
}