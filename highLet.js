// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxLet(string){
    let dict = {}
    for (let letter of string){
        dict[letter] = (dict[letter] || 0) +1
    }
    let values = Object.values(dict)
    let highest = Math.max(...values)
    for (let key in dict){
        if (dict[key] === highest){
            return key
        }
    }
}

const maxLet2 = function(string){
    let charMap = {}, count=0, maxChar=null
    for (let char of string){
        charMap[char] = (charMap[char] || 0) + 1
    }
    for (let char in charMap){
        if (charMap[char] > count){
            maxChar=char
            count=charMap[char]
        }
    }
    return maxChar
}