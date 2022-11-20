/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    // return the sums of the largest sub-array
    let arr = []
    for (let i =0; i<accounts.length; i++){
        arr.push(accounts[i].reduce((a,b)=>a+b, 0))
    }
    return Math.max(...arr)
};