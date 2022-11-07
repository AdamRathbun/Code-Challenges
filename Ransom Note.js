/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // go through magazine and shift the letter as we compose ransom note
    // if ransom note is is complete, return true
    let letters = magazine.split('')
    let note = ransomNote.split('')
    for (let i =0; i <note.length; i++){
        if (letters.includes(note[i])){
            const removed = letters.indexOf(note[i])
            letters.splice(removed, 1)
        }else {
            return false
        }
    }
    return true
};