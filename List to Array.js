function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.next)
    array.push(node.value);
  return array;
}

/*
grab each value from a linked list and push it to a new array
for loop
*/