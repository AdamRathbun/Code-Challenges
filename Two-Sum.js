/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++){
            if (target-nums[i]===nums[j] && i!==j){
                return [i, j]
            }
        }
    }
};

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// [2,11,7,15], target = 9 output: [0,2]