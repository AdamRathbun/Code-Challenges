/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // return the longest common previx in an array of strings, or "" if empty
    // O(N^2) with nested loop
    let firstWord=strs[0]
    let temp=''
    for (let i=1; i<strs.length; i++){
        for (let j=0; j<firstWord.length; j++){
            if (firstWord[j]===strs[i][j]){
                temp+=strs[i][j]
            }else {
                break
            }
        }
        firstWord=temp
        temp=''
    }
    return firstWord
};