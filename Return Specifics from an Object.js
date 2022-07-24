function returnSpecifics(obj){
  console.log(obj)
  let arr=[]
  let arr2=[]
  for (let key in obj){
    if (typeof obj[key]==='number'){
      arr.push(obj[key])
    }else if (typeof obj[key]==='function'){
      arr2.push(`${key}`)
    }
  }
  arr.length>=0?arr=arr.concat(arr2):arr2
  console.log(arr)
  return Object.keys(obj).length===0?['The Object is Empty']:arr
}


/*
P: object with various values
R: the number values and method names (as a string)
E: 
returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
[1,2,3,'e'] 
P:
for...in
typeof and conditional
*/