function isolateIt(arr){
    return arr.map(x=>{
      if (x.length%2==0){
        return x.slice(0,x.length/2)+'|'+ x.slice(x.length/2)
      }
      if (x.length%2){
        return x.slice(0,x.length/2)+'|'+ x.slice((x.length/2)+1)
      }
    })
  }