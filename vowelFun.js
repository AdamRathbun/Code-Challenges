// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function vowelFun(string){
    let words = string.split(' ')
    let letters = words.join('').toLowerCase()
    if ( !letters.includes('a') ){
        return 0
    }else if ( !letters.includes('e') ){
        return 1
    }else if ( !letters.includes('i') ){
        return 2
    }else if ( !letters.includes('o') ){
        return 3
    }else if ( !letters.includes('u') ){
        return 4
    }
}

function vowelFun2(string){
    if ( !string.includes('a') ){
        return 0
    }else if ( !string.includes('e') ){
        return 1
    }else if ( !string.includes('i') ){
        return 2
    }else if ( !string.includes('o') ){
        return 3
    }else if ( !string.includes('u') ){
        return 4
    }
}

function vowelFun3(string){
    let vowels = 'aeiou'
    for (let i=0; i<vowel.length; i++){
        if (string.indexOf(vowel[i]) ===-1 ){
            return i
        }
    }
}