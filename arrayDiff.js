// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

function arrayDiff3(arr1, arr2){
    let arrSet= new Set(arr2)
    // filter out values that do not appear in the set using has(), which is only for sets
    return arr1.filter(x=> !arrSet.has(x) )
}

function arrayDiff2 (arr1, arr2){
    if (!arr1 || !arr2) return arr1
    return arr1.filter(x => arr2.indexOf(x)===-1 )
}

function arrayDiff (arr1, arr2){
    if (!arr1 || !arr2) return arr1
    for (let i=0; i<arr1.length; i++){
        for (let j=0; j<arr2.length; j++){
            if (arr1[i]===arr2[j]){
                arr1=arr1.filter(x=>x!==arr2[j])
            }
        }
    }
    return arr1
}

