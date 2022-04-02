function shuffledArray(shuffled) {
    let potentialSum = 0;
    
    for(let i = 0; i < shuffled.length; i++){
        potentialSum = shuffled.splice(0, 1)[0];
        
        if(potentialSum === shuffled.reduce((a, b) => a + b)){
            return shuffled.sort((a, b) => a - b);
        }
        shuffled.push(potentialSum)
    }
}

/*
P: array of shuffled integers where the sum is mixed in
R: array without the sum
E: shuffled = [1, -3, -5, 7, 2] returns [-5, -3, 2, 7] b.c the sum is 1
P:
for loop
if current element is equal to shuffled.reduce()-current, then splice it there, sort at the end
*/