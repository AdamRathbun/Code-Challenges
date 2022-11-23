/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n<=1){
        return n
    }
    let check = {
        0: 1,
        1: 1
    }
    for (let i = 2; i<=n; i++){
        check[i]=check[i-1] + check[i-2]
    }
    return check[n]
};

// have to use Fibonaci Fn = Fn-1 + Fn-2 (note for F(1) and F(0), it's just 1)