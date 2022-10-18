function isPalindrome(line) {
    if (!Number.isNaN(line)){
      return line.toString().split('').reverse().join('')===line.toString() ? true : false
    }
    return line.split('').reverse().join('')===line ? true : false
  }