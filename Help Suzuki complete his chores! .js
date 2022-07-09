function choreAssignment(chores) {
 var result = [];
 chores.sort((a,b)=> a-b);
 while (chores.length) {
  result.push(chores.pop() + chores.shift());
 };
 return result.sort((a,b)=> a-b);
}