function makeParts(arr, chunkSize) {
    let array = []
    while (arr.length>0){
      array.push(arr.splice(0,chunkSize))
    }
  return array
}


/*
create sub-arrays out of an array parameter, size according to the count parameter
create new array, while loop arr still has elements, array.push(splice(0,count))
splice starting at 0 index, delete as many as count^
*/