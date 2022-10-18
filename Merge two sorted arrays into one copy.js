function mergeArrays(arr1, arr2) {
    let merged=arr1.concat(arr2)
    let newMerged=[...new Set(merged)]
    return newMerged.sort((a,b)=>a-b)
  }