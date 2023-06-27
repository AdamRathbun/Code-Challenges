function numObj(s) {

    return s.map(num=>{
      char = String.fromCharCode(num)
  //     [num] allows the variable num to be dynamically populated
      return {[num] : char}
    })
    
  }
  
  
  // take an array of numbers, creating an object with the number string as the key (an object for each)
  // and the value as the corresponding character code as a string, returning an array of objects
// note String.fromCharCode() is the opposite of charCodeAt()