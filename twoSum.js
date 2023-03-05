var twoSum = function(nums, target) {
    let storage={}
    for (let i=0; i<nums.length; i++){
        let num2=target-nums[i]
        if (num2 in storage){
            return [storage[num2], i]
        }
        storage[nums[i]]=i
    }
    return null
};

// quadratic answer: one for loop of each number subtracted from target, to see if the result matches another element

// var twoSum = function(nums, target) {
//     for (let i=0; i<nums.length; i++){
//         for (let j=i+1; j<nums.length; j++){
//             if (nums[j]===target-nums[i]){
//                 return [i,j]
//             }
//         }
//     }
// };