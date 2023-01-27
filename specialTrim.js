   // parameters - string, then the max string length
  // Return the trimmed string with elipsis if it is larger than the max length, 
  //   with the elipsis counting in that max string length calculation (+3)
  // If the string is less than 3, then don't count elipsis length
  // example - "Creating kata is fun", 14 should return "Creating ka..."

  function trim (str, size){
    return str.length>size ? `${str.slice(0, str.length<3 ? size : size-3)}...` : str
  }

