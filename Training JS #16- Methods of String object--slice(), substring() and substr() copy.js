function cutIt(arr){
    let lengths=[]
    for (let i=0; i<arr.length; i++){
      lengths.push(arr[i].length)
    }
    lengths.sort((a,b)=>a-b)
    for (let j=0; j<arr.length; j++){
      arr[j]=arr[j].slice(0, lengths[0])
    }
    console.log(arr)
    return arr
  }