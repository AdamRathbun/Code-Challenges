function solve(arr){
  return arr.filter(x=>arr.indexOf(-x)===-1)[0]
};

/*
P: array of positive and negative nums
R: a single num that is only positive or only negative
E: [-3, 1, 2, 3, -1, -4, -2] => -4
P: 

ok regex would be the easiest
but can use filter for no negative version of value, as in indexOf=-1
*/