function sortByLength (array) {
  return array.sort((a,b)=>a.length-b.length)
};

/*
P: array of strings 
R: sorted array of strings by string length
E:
["Telescopes", "Glasses", "Eyes", "Monocles"]
["Eyes", "Glasses", "Monocles", "Telescopes"]
P:
spread operator into sort by a.length and b.length
or actually don't even need spread
*/