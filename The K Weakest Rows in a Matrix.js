/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let strategy = {}
    for (let i = 0; i<mat.length; i++){
        let soldiers = mat[i].filter(x=> x===1)
        strategy[i]=soldiers.length
    }
    // console.log(strategy)
    let keys = Object.keys(strategy)
    keys=keys.sort((a,b)=>strategy[a]-strategy[b])
    return keys.slice(0,k)
};