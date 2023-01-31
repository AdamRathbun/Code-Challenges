// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

function commonDenom(x, y){
    if (x===y) return x
    const small = x < y ? x : y
    const big = y < x ? x : y
    for (let i=small; i>=1; i--){
        if (small%i===0 && big%i===0){
            return i
        }
    }
}

function commonDenom2(x,y){
    return y==0 ? x : commonDenom2 (y, x%y)
}
