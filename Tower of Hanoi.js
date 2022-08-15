function towerOfHanoi(rings){
  console.log(rings)
  if (rings===1){
    return 1
  }else if (rings===2){
    return 3
  }  let total=7
  for (let i=4; i<=rings; i++){
    total=(total*2)+1
  }
  console.log(total)
  return total
}

/*
3 rings is 7 moves, 4 rings if 15, 5 rings is 31
write a function of for every number over 3, multiply by (7 times 2, plus 1)
<<<<<<< HEAD
*/
=======
*/
>>>>>>> 3331c5a2bba986129dd73dc73d7ee0a36067267c
