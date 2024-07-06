function containAllRots(strng, arr) {
  if (strng === '') {
    return true
  }

  for (let i = 0; i < strng.length; i++) {
    let combo = strng.slice(i) + strng.slice(0, i)
    if (!arr.includes(combo)) {
      return false
    }
  }
  return true
}

// given a string and an array of strings, check if the array contains all combinations of the string characters
// return true or false if it does contain all combinations or not
// ex. "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// can do a for loop where you check via slice method.