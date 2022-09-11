function sortByValueAndIndex(array){
  return array.map((x,i)=>[x, x*i+x]).sort((a,b)=>a[1]-b[1]).map(x=>x[0])
}

/*
sort an array by the value of its value times index (starting at index 1)
example 23, 2, 3, 4, 5 returns 2, 3, 4, 23, 5
map it so that each value is an array of that value and value*index+value
sort by that second element of each array
map so that each array is only the first element
*/