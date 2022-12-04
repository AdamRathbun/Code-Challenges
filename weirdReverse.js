// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


// function weirdReverse(string){
//     let letters = string.split('')
//     let word = []
//     for (let i=0; i<letters.length; i++){
//         word.unshift(letters[i])
//     }
//     return word.join('')
// }

// function weirdReverse2(string){
//     let word = ''
//     for (let char of string){
//         word = char + word
//     }
//     return word
// }

// second one is O(n) whereas the first one is O(n^2)

// ideally, it would otherwise just be
// function weirdReverse(string){
//     return string.split('').reverse().join('')
// }
