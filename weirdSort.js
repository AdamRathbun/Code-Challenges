// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

function weirdSort(string){
    const words = string.split(' ')
    return words.sort((a,b)=> a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
}

// function weirdSort2(string){
//     const words = string.split(' ')
//     return words.sort((a,b)=> a.slice(-1) > b.slice(-1))
// }
