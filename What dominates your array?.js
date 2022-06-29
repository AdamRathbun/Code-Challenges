function dominator(arr) {
   arr.sort((a,b)=>a-b)
   console.log(arr)
   for (let i=0; i<arr.length; i++){
     if (arr[i]===arr[Math.floor(arr.length/2)+i]){
       return arr[i]
     }
   }
   return -1
}

/*
P: array
R: the dominator (appearing more than half of all elements), or -1 if no dominator
E: [3,4,3,2,3,1,3,3] returns 3
P: 
can just sort it, 
then do a for loop and if any index element equals the element at length/2+i, then it's dom
*/