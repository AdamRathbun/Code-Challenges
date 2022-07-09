function combine() {
  let obj={}
  for (let i=0; i<arguments.length; i++){
    for (let key in arguments[i]){
      if (!obj[key]){
        obj[key]=arguments[i][key]
      }else {
        obj[key]+=arguments[i][key]
      }
    }
  }
  console.log(obj)
  return obj
}


/*
P: unknown number of objects 
R: one object of the original objects combined
E: 
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
P:
for loop for how many objects, then for...in to iterate over each object
if the property doesn't exist, make one, if it exists, add to the existing
*/