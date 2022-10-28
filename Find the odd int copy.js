function findOdd(arr) {
    return arr.find((num) => arr.filter(x => x == num).length % 2)
  }