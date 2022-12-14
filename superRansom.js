// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

const ransomNote = function(note, magazine){
    let hashMap = {}
    const wordsM = magazine.split(' ')
    const wordsN = note.split(' ')
    for (let i = 0; i<wordsM.length; i++){
        hashMap[wordsM[i]] = (hashMap[wordsM[i]]+1 || 1)
    }
    console.log(hashMap)
    for (let word of wordsN){
        if (hashMap[word]>=1){
            hashMap[word]=hashMap[word]-1
            continue
        }else{
            return false
        }
    }
    return true
}