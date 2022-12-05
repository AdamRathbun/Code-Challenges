// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function letterCounter(string){
    let bank = {}
    let array = string.split('')
    array.forEach(letter => {
        bank[letter] = (bank[letter] || 0) + 1
    })
    return bank
}