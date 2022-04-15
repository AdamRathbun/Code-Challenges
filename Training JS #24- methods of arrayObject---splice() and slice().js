function threeInOne(arr){
    let arr1=[]
    for (let i=0; i<arr.length; i+=3){
      arr1.push(arr.slice(i,i+3))   //makes arrays of each trio. note it's i+3
    }
    console.log(arr1.map(x=>x.reduce((a,b)=>a+b))) //for each trio, reduce into the sum value
    return arr1.map(x=>x.reduce((a,b)=>a+b))
  }
  