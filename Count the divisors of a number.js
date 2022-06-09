function getDivisorsCnt(n){
  let count=0
   for (let i=0; i<=n; i++){
     if (n%i===0){
       count+=1
     }
   }
  return count
}

/*
P: num
R: number of divisors of num
E: function(6) returns 4
P:
for loop with %?
*/