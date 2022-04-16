function sortIt(arr){
    return arr.slice().sort((a,b)=>{
      let As=arr.filter(x=>x===a).length
      let Bs=arr.filter(x=>x===b).length
      if (As===Bs){
        return b-a
      }else if (As>Bs){
        return 1
      }else {
        return -1
      }
    })
  }