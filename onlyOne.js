function onlyOne() {
  let count = 0
  if (arguments.length === 0) {
    return false
  }

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === true) {
      count++
    }
  }

  return count === 1 ? true : false

}

// given any number of boolean flags, see if only one of them is true. 