function isLeapYear(year) {
  if (year % 400 === 0) {
    return true
  }

  if (year % 100 === 0) {
    return false
  }

  if (year % 4 === 0) {
    return true
  }

  return false
}

// given a year, determine if it is a leap year or not
// the criteria are: divisible by 4, if divisible then 100 then not unless it is divisible by 400
// the range is 1600<=year<=4000
// return true or false

// ex. 2020 is a leap year

