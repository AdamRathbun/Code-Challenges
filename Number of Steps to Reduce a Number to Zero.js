/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    while (num>0){
     if (num%2===0){
        steps=steps+1
        num=num/2
     }else if (num%2===1){
        steps=steps+1
        num=num-1
     }
    }
    return steps
};