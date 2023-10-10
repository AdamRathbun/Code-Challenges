// Your Task
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

function cookingTime1(eggs) {
  return 5 * Math.ceil(eggs / 8)
}

// function cookingTime2(eggs) {
//   let count = eggs
//   let time = 0
//   while (count){
//     if (count<=8){
//       return time+5
//     }else {
//       count-=8
//       time+=5
//     }
//   }
//   return time
// }

// take in a positive integer for number of eggs to boil, note 8 eggs max in pot, 5 mins to boil an egg
// return the time it takes in mins