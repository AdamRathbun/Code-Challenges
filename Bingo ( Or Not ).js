function bingo(a) {
    let newA=[...new Set(a)]
    console.log(newA)
    let counter=0
    for (let i=0; i<newA.length; i++){
      if (newA[i]==2){
        counter+=1
      }
      if (newA[i]==7){
        counter+=1
      }
      if (newA[i]==9){
        counter+=1
      }
      if (newA[i]==15){
        counter+=1
      }
      if (newA[i]==14){
        counter+=1
      }
    }
    console.log(counter)
    return counter===5 ? 'WIN' : 'LOSE'
  }
  
  
  
  
  /*
  function bingo(a) {
  return a.includes[2,9,15,14,7] ? 'WIN' : 'LOSE'
  }
  */