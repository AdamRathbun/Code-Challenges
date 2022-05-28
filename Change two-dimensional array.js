function matrix(array) {
    let arr=array.slice()
    for (let i=0; i<array.length; i++){
      if (arr[i][i] < 0){
        arr[i][i]=0
      }else if (arr[i][i] >= 0){
        arr[i][i]=1
      }
    }
    console.log(arr)
    return arr
}