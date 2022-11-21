// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function noDupes(string){
    let words = string.split(' ')
    let last = null
    let count=0
    let arr=[]
    for (let i=0; i<words.length; i++){
        if (words[i]!==last){
            words[count]=words[i]
            last=words[i]
            count++
            arr.push(words[i])
        }
    }
    console.log(arr)
    return arr.join(' ')
}
