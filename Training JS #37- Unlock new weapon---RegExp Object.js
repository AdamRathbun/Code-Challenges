function countAnimals(animals,count){
    let arr=[]
    for (let i=0; i<count.length; i++){
      arr.push(animals.split(count[i]).length-1)
    }
    console.log(arr)
    return arr
  }