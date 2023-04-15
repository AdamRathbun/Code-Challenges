// Coderbyte prac

// username checker
// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.
function CodelandUsernameValidation(str) { 

    // code goes here  
    if (str.length>25 || str.length<4){
      return false
    }
  
    const alphabet=/[a-z]/gi
    if (!str[0].match(alphabet)){
      return false
    }
  
    if (str[str.length-1]==='_'){
      return false
    }
  
    const allowed = /^[a-z0-9_]+$/gi
    // ^ means beginning, $ means end. + means more than one instance. gi means global and case insensitive
    if (!allowed.test(str)){
      return false
    }
  
    return true
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));

// correct bracket checker
function BracketMatcher(str) { 

  // code goes here  
  if (!/[()]/.test(str)){
    return 1
  }

  let checker = 0

  for (let i=0; i<str.length; i++){
    if (str[i]==='('){
      checker++
    }else if (str[i]===')'){
      checker--
      // check if a ) paranthesis is placed before (
      if (checker<0){
        return 0
      }
    }
  }

  return checker===0 ? 1 : 0
}
   
// keep this function call here 
console.log(BracketMatcher(readline()));

// find longest word in a string

function LongestWord(sen) { 

  // code goes here  
  // split by by everything that's not a word, continuous - global - case insensitive
  let wordsOnly = sen.split(/[^\w]+/gi)
  let longest = 0
  for (let i=0; i<wordsOnly.length; i++){
    if (wordsOnly[i].length>longest){
      longest=wordsOnly[i].length
    }
  }
  return wordsOnly.find(word=>word.length===longest)

}
   
// keep this function call here 
console.log(LongestWord(readline()));

// intersection finder
function FindIntersection(strArr) { 
  // parameter is an array of 2 arrays
  // need to check each array to see if an element is in both arrays, 
  // can push the intersection elements to a new array 
  let intersection = []
  let more, less

  if (strArr[0].length>strArr[1].length){
    more=strArr[0].split(', ')
    less=strArr[1].split(', ')
  }else{
    less=strArr[0].split(', ')
    more=strArr[1].split(', ')
  }

  for (let i=0; i<more.length; i++){
    if (less.includes(more[i])){
      intersection.push(more[i])
    }
  }
  return intersection.length===0 ? false : intersection.join(',')
}
   
// keep this function call here 
console.log(FindIntersection(readline()));

// bracket combination where you get a number and return the number of combinations of () you can get
function BracketCombinations(num) {
  // base case: if num is 0, there is only one possible combination, an empty string
  if (num === 0) {
    return 1;
  }
  let count = 0;
  // recursive case: add one open parenthesis and recurse with num-1, then add one close parenthesis and recurse with num-1
  for (let i = 0; i < num; i++) {
    count += BracketCombinations(i) * BracketCombinations(num - i - 1);
  }
  
  return count;
}

// check a string, see if there's a pair of numbers that add to 10 and have 3 question marks in between them. return boolean
// if there's a pair that adds to 10 but doesn't have 3 question marks in between, return false
function QuestionsMarks(str) { 
  let myFilter = /[0-9\?]/g;
  let filtered = str.match(myFilter);
  let result = false;
  let num1=null

  if (filtered.length < 5) {
    return false;
  }

  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i]!=='?' && !num1){
      num1=Number(filtered[i])
    }else if (filtered[i]!=='?' && num1+Number(filtered[i])===10){
      num1=Number(filtered[i])
      if (filtered[i-1] === '?' && filtered[i-2] === '?' && filtered[i-3] === '?'){
          result=true
      }else{
          return false
      }
    }

  }

  return result;
}

// keep this function call here 
console.log(QuestionsMarks(readline()));



